# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Accept build arguments
ARG VITE_CONVERTKIT_FORM_ID
ARG VITE_CONVERTKIT_API_KEY
ARG VITE_LANDING_THEME=dark

# Set as environment variables for Vite build
ENV VITE_CONVERTKIT_FORM_ID=$VITE_CONVERTKIT_FORM_ID
ENV VITE_CONVERTKIT_API_KEY=$VITE_CONVERTKIT_API_KEY
ENV VITE_LANDING_THEME=$VITE_LANDING_THEME

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app (Vite will read the ENV vars)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

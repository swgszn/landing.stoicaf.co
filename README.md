# Stoic AF Landing Page

High-conversion landing page for www.stoicaf.co - marketing the book, journal app, and merchandise.

## Features

- **Hero Section**: Strong value proposition with clear CTAs
- **Product Showcase**: Dedicated sections for book, app, and merch
- **Social Proof**: Stats, testimonials, and reviews
- **Email Capture**: Newsletter signup with conversion optimization
- **Responsive Design**: Mobile-first, works on all devices
- **Fast Performance**: Optimized assets and lazy loading

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (via CDN)
- Lucide React (icons)

## Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 3001)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Coolify)

This app is configured for deployment via Coolify using Docker.

### Build Settings
- **Build Command**: Docker builds automatically
- **Port**: 80 (nginx serves the static build)

### Environment Variables

**ConvertKit Integration (Required):**
```bash
VITE_CONVERTKIT_FORM_ID=your_form_id
VITE_CONVERTKIT_API_KEY=your_public_api_key
```

Get these from:
1. Sign up at https://convertkit.com (free up to 1K subscribers)
2. Create a form: Forms → Create Form → Inline
3. Get Form ID from form settings
4. Get API Key: Settings → Advanced → API Keys (use Public key)

**Optional:**
- Analytics tracking
- Payment processing

### Docker Build
```bash
# Build image
docker build -t stoicaf-landing .

# Run locally
docker run -p 3001:80 stoicaf-landing
```

## Customization

### Colors
Brand colors are defined in `index.html` Tailwind config:
- `stoic-blue`: #4B90C8
- `stoic-dark`: #1E293B
- `stoic-light`: #F8FAFC

### Content
All content is in `src/App.tsx` for easy editing:
- Hero copy
- Product descriptions
- Testimonials
- Pricing
- Social links

## Integration Points

### Email Newsletter (ConvertKit)

**Status:** ✅ Integrated with ConvertKit API

The newsletter form submits directly to ConvertKit. Setup:

1. **Create ConvertKit Account** (free tier)
   - Go to https://convertkit.com
   - Sign up and verify email

2. **Create a Form**
   - Forms → Create Form → Inline
   - Name it "Stoic AF Newsletter"
   - Copy the Form ID from settings

3. **Get API Key**
   - Settings → Advanced → API Keys
   - Copy your **Public API Key** (not secret!)

4. **Configure Environment Variables**
   ```bash
   # In Coolify, add these environment variables:
   VITE_CONVERTKIT_FORM_ID=1234567
   VITE_CONVERTKIT_API_KEY=your_public_key_here
   ```

5. **Redeploy**
   - Coolify will rebuild with the new env vars
   - Newsletter form will now submit to ConvertKit

**Features:**
- Double opt-in confirmation email
- Automatic welcome sequence (configure in ConvertKit)
- Subscriber tagging and segmentation
- Email automation workflows

### Analytics
Add tracking scripts to `index.html`:
- Google Analytics
- Plausible
- Fathom

### E-commerce
Link "Buy Now" buttons to:
- Gumroad
- Shopify
- Stripe Checkout
- Custom cart

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Bundle Size: < 200KB (gzipped)

## License

Proprietary - Stoic AF

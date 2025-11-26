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
None required for basic deployment. Add as needed for:
- Email service integration
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

### Email Newsletter
Currently logs to console. Integrate with:
- ConvertKit
- Mailchimp
- SendGrid
- Custom API

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

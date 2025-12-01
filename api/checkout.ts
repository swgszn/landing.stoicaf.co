/**
 * Stripe Checkout Session API Endpoint
 *
 * This is a serverless function for creating Stripe Checkout sessions.
 * Deploy this to Vercel, Netlify, or any serverless platform.
 *
 * Required environment variables (server-side, NOT VITE_ prefixed):
 * - STRIPE_SECRET_KEY: Your Stripe secret key (sk_test_... or sk_live_...)
 * - STRIPE_PRICE_PAPERBACK: The price ID for the paperback book
 *
 * For Vercel: This file works as-is in the /api folder
 * For Netlify: Move to /netlify/functions/checkout.ts and adjust exports
 */

import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

interface CheckoutRequest {
  priceId?: string;
  successUrl: string;
  cancelUrl: string;
}

export default async function handler(req: Request): Promise<Response> {
  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body: CheckoutRequest = await req.json();

    // Use provided priceId or fall back to env variable
    const priceId = body.priceId || process.env.STRIPE_PRICE_PAPERBACK;

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Price ID not configured' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: body.successUrl + '&session_id={CHECKOUT_SESSION_ID}',
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Checkout session error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// For Vercel Edge Runtime (optional, faster cold starts)
export const config = {
  runtime: 'edge',
};

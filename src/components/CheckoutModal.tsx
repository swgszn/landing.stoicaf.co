import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { X, BookOpen, Check, ShieldCheck, Truck } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    const priceId = import.meta.env.VITE_STRIPE_PRICE_PAPERBACK;

    if (!priceId) {
      setError('Checkout is not configured yet. Please check back soon!');
      setIsLoading(false);
      return;
    }

    try {
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Payment system failed to load. Please refresh and try again.');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}?checkout=success`,
        cancelUrl: `${window.location.origin}?checkout=cancelled`,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="bg-stoic-blue p-3 rounded-xl">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold">STOIC AF</h2>
                <p className="text-slate-300 text-sm">The Book</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Order Summary */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 mb-3">Order Summary</h3>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Stoic AF Paperback</span>
                  <span className="font-semibold">$25.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-2">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-slate-200 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-bold text-xl text-stoic-blue">$25.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Check, text: '30-Day Stoic Workbook Included' },
                { icon: ShieldCheck, text: 'Secure Payment via Stripe' },
                { icon: Truck, text: 'Ships Worldwide' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <item.icon className="w-4 h-4 text-green-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-stoic-blue hover:bg-sky-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Redirecting to Checkout...' : 'Proceed to Payment'}
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              You'll be redirected to Stripe for secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { X } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          successUrl: `${window.location.origin}?checkout=success`,
          cancelUrl: `${window.location.origin}?checkout=cancelled`,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to initialize checkout');
      }

      const data = await response.json();
      return data.clientSecret;
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      throw err;
    }
  }, []);

  useEffect(() => {
    if (isOpen && !clientSecret) {
      fetchClientSecret()
        .then(setClientSecret)
        .catch(() => {});
    }
  }, [isOpen, clientSecret, fetchClientSecret]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setClientSecret(null);
      setError(null);
    }
  }, [isOpen]);

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
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white flex items-center justify-between">
            <h2 className="text-lg font-bold">Complete Your Order</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-1">
            {error ? (
              <div className="p-6">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-4">
                  {error}
                </div>
                <button
                  onClick={() => {
                    setError(null);
                    setClientSecret(null);
                  }}
                  className="w-full bg-stoic-blue hover:bg-sky-500 text-white py-3 rounded-xl font-semibold transition-all"
                >
                  Try Again
                </button>
              </div>
            ) : clientSecret ? (
              <div id="checkout" className="min-h-[400px]">
                <EmbeddedCheckoutProvider
                  stripe={stripePromise}
                  options={{ clientSecret }}
                >
                  <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
              </div>
            ) : (
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stoic-blue"></div>
                <span className="ml-3 text-slate-600">Loading checkout...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useCallback, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { X } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    const priceId = import.meta.env.VITE_STRIPE_PRICE_PAPERBACK;

    if (!apiUrl) {
      throw new Error('API URL not configured');
    }

    const response = await fetch(`${apiUrl}/api/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl: `${window.location.origin}?checkout=success`,
        cancelUrl: `${window.location.origin}?checkout=cancelled`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create checkout session');
    }

    const data = await response.json();
    return data.clientSecret;
  }, []);

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
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Complete Your Order</h2>
              <p className="text-sm text-slate-500">Stoic AF Book - $25</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Checkout Content */}
          <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
            {error ? (
              <div className="text-center py-8">
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="text-stoic-blue hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : (
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

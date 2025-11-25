'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const plan = searchParams.get('plan');

    if (!plan) {
      router.push('/pricing');
      return;
    }

    const createCheckoutSession = async () => {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan }),
        });

        const data = await response.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          setError('Failed to create checkout session');
          setLoading(false);
        }
      } catch (err) {
        console.error('Checkout error:', err);
        setError('Something went wrong');
        setLoading(false);
      }
    };

    createCheckoutSession();
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-32 bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => router.push('/pricing')}
            className="text-blue-500 hover:underline"
          >
            Return to Pricing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32 bg-black flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
        <p className="text-gray-400">Redirecting to checkout...</p>
      </div>
    </div>
  );
}

'use client';

import { Check } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useState } from 'react';

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
  requiresCheckout?: boolean;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText,
  ctaLink,
  requiresCheckout = false,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (!requiresCheckout) return;

    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: 'professional' }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert(error instanceof Error ? error.message : 'Failed to create checkout session. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative p-8 rounded-2xl ${
        highlighted
          ? 'bg-gradient-to-br from-zinc-950 to-black border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105'
          : 'bg-gradient-to-br from-zinc-950 to-black border border-gray-800 shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-2">/{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {requiresCheckout ? (
        <Button
          onClick={handleClick}
          disabled={loading}
          className={`w-full ${
            highlighted
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400'
              : 'border-gray-700 text-white hover:bg-white/5'
          }`}
          variant={highlighted ? 'default' : 'outline'}
          size="lg"
        >
          {loading ? 'Loading...' : ctaText}
        </Button>
      ) : (
        <Link
          href={ctaLink}
          className="block"
          target={ctaLink.startsWith('http') ? '_blank' : undefined}
          rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <Button
            className={`w-full ${
              highlighted
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400'
                : 'border-gray-700 text-white hover:bg-white/5'
            }`}
            variant={highlighted ? 'default' : 'outline'}
            size="lg"
          >
            {ctaText}
          </Button>
        </Link>
      )}
    </div>
  );
}

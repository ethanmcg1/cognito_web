'use client';

import { PricingCard } from '@/components/pricing-card';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Institutional-grade intelligence at competitive rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Essential"
            price="Free"
            period=""
            description="Start your journey"
            features={[
              'Limited Institutional FX Research',
              'Bi-weekly Newsletter',
              'Limited Educational Resources',
            ]}
            ctaText="Join Now"
            ctaLink="https://discord.gg/hUzTCUUV"
          />

          <PricingCard
            name="Premium"
            price="£20"
            period="month"
            description="For serious traders"
            features={[
              'All macro reports',
              'Unlimited AI summaries',
              'Historical datasets',
              'Economic calendar',
              'Priority support',
              'API access',
              'Custom alerts',
            ]}
            highlighted={true}
            ctaText="Subscribe Now"
            ctaLink="/checkout?plan=professional"
            requiresCheckout={true}
          />

          <PricingCard
            name="Elite Mentorship"
            price="1-1 Mentorship"
            period=""
            description="Expert guidance"
            features={[
              'Weekly 1-1 Sessions',
              'Access To All Research Tools',
              'Monthly Performance Reviews',
              '24/7 Access To Mentors',
              'Direct Feedback On Trade Ideas',
            ]}
            ctaText="Enquire"
            ctaLink="#newsletter"
          />
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            All Plans Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Industry-leading AI models',
              'Secure data encryption',
              'Regular feature updates',
              'Mobile-responsive interface',
              'Real-time data feeds',
              '99.9% uptime guarantee',
              'GDPR compliant',
              'Cancel anytime',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

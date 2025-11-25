'use client';

import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Michael Chen",
    role: "Portfolio Manager",
    company: "Silverstone Capital",
    rating: 5,
    text: "Cognito has transformed how we approach market research. The depth of analysis and quality of insights is unmatched. The weekly reports alone have paid for themselves many times over.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "Sarah Williams",
    role: "Chief Investment Officer",
    company: "Horizon Wealth Management",
    rating: 5,
    text: "The institutional-grade research at a fraction of traditional costs is remarkable. Our team relies on Cognito daily for making informed decisions across multiple asset classes.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "David Rodriguez",
    role: "Senior Analyst",
    company: "Quantum Trading Group",
    rating: 5,
    text: "The macro analysis and market intelligence from Cognito gives us a significant edge. The quality of data and presentation is superior to many services costing 10x more.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "Emily Thompson",
    role: "Head of Research",
    company: "Atlas Investment Partners",
    rating: 5,
    text: "Exceptional value and insights. The proprietary datasets and AI-powered analysis have become essential tools for our research team. Highly recommended for serious investors.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "James Patterson",
    role: "Hedge Fund Manager",
    company: "Meridian Capital",
    rating: 5,
    text: "The weekly outlooks are incredibly thorough and actionable. Cognito aggregates perspectives from top institutions that would take our team weeks to compile independently.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "Alexandra Kim",
    role: "Director of Analytics",
    company: "Pinnacle Investments",
    rating: 5,
    text: "The depth of coverage across FX, commodities, and equities is impressive. Having institutional-level research delivered daily has significantly improved our decision-making process.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-32 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide mb-6 border border-blue-500/30 text-blue-400">
              CLIENT TESTIMONIALS
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Trusted by Market Professionals
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              See what institutional investors and traders say about Cognito's research platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-gray-800 p-8 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="w-10 h-10 text-blue-500/30" />
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{review.company}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="inline-block bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-blue-500/30 p-12 max-w-3xl">
              <div className="space-y-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white">
                  5.0 Average Rating
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Based on feedback from institutional investors, portfolio managers, and trading professionals who rely on Cognito for market intelligence.
                </p>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                    <div className="text-sm text-gray-500">Professional Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                    <div className="text-sm text-gray-500">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-500">Platform Access</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

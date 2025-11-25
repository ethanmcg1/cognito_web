'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { imageUrls } from '@/lib/image-urls';
import {
  TrendingUp,
  BarChart3,
  Globe2,
  FileText,
  ArrowRight,
  Settings,
  X,
  Star,
  Quote
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ContactFormDialog } from '@/components/contact-form-dialog';

export default function Home() {
  const [showDocument, setShowDocument] = useState(false);
  const [showInstitutionalInsights, setShowInstitutionalInsights] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleSubscribe = async () => {
    setCheckoutLoading(true);
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
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
      setCheckoutLoading(false);
    }
  };

  useEffect(() => {
    const handleOpenWeeklyOutlook = () => {
      setShowDocument(true);
    };

    const handleOpenInstitutionalInsights = () => {
      setShowInstitutionalInsights(true);
    };

    window.addEventListener('openWeeklyOutlook', handleOpenWeeklyOutlook);
    window.addEventListener('openInstitutionalInsights', handleOpenInstitutionalInsights);
    return () => {
      window.removeEventListener('openWeeklyOutlook', handleOpenWeeklyOutlook);
      window.removeEventListener('openInstitutionalInsights', handleOpenInstitutionalInsights);
    };
  }, []);

  return (
    <>
    {showInstitutionalInsights && (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 animate-in fade-in duration-300">
        <button
          onClick={() => setShowInstitutionalInsights(false)}
          className="fixed top-6 right-6 text-white hover:text-blue-400 transition-all z-[60] bg-black/80 hover:bg-black rounded-full p-3 shadow-xl border border-gray-800 hover:border-blue-500"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="h-full overflow-y-auto py-8 px-4">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative">
              <div className="inline-block px-4 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide mb-4 border border-blue-400/30">
                INSTITUTIONAL ANALYSIS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Institutional Insights 16/11/25</h1>
              <p className="text-gray-300 text-lg mb-6">Global Bank FX Perspectives & Market Intelligence</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="opacity-90">Published: November 16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="opacity-90">Major Banks Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="opacity-90">Multi-Currency Coverage</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 space-y-10 bg-gradient-to-b from-gray-50 to-white">
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Crédit Agricole: Australian Labor Market Strength</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Crédit Agricole notes that Australia's labour market delivered a substantial upside surprise, with employment rising by +42.2k, driven by strong full-time job creation and a drop in the unemployment rate to 4.3%. Underemployment is now near a 4-year low, and participation remains historically elevated—clear indications that labour conditions are still tight.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The bank argues that such resilience will keep wage pressures and inflation risks elevated, especially in the context of Australia's sluggish productivity growth. Combined with the RBA's recent comments on limited spare capacity, CACIB believes the rate-cutting cycle has effectively come to an end.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Market Implications</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Markets have now priced in only a very slim probability of any further RBA easing before mid-2026. While the 0.6570–0.6600 zone remains a difficult resistance area due to ongoing USD strength, CACIB still anticipates AUD/USD to edge higher toward 0.6800 by year-end and sees AUD/NZD longs as a preferred way to express bullish AUD views.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">MUFG: EUR Reserve Accumulation Accelerates</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The bank observes that foreign investors' appetite for Eurozone bonds and equities has reached a fresh record high, with the surge driven primarily by renewed buying of sovereign debt.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  MUFG points to the June Annual Global Public Investor Survey, which shows the EUR as the top choice for net reserve accumulation this year. This shift reflects increasing caution toward the USD, as U.S. political uncertainty, fiscal pressures, and broader geopolitical risks dampen the appeal of adding to dollar reserves.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Strategic Outlook</h4>
                  <p className="text-gray-700 leading-relaxed">
                    MUFG concludes that these dynamics leave room for further increases in EUR-denominated FX reserves, providing additional medium-term structural support for the single currency.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Goldman Sachs: Yen Weakness to Persist</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The bank cites two key drivers behind its expectation for continued JPY underperformance: a widening fiscal premium as markets factor in the possibility of early elections under the new administration, and the minimal expected impact of a U.S. government shutdown on growth or overall risk sentiment.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Goldman notes that while FX intervention risk could limit further USD/JPY upside, the yen may continue to lag on the crosses. However, the bank also suggests that after the recent bout of selling, there is now less scope to aggressively extend JPY short positions.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Crédit Agricole: EUR/USD Recovery Factors</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Crédit Agricole observes that EUR/USD has extended its recovery from early-November lows, underpinned by a supportive combination of factors:
                </p>
                <div className="grid gap-4">
                  {[
                    {
                      title: 'Wider EUR–USD Rate Spread',
                      description: 'Softer U.S. data has revived expectations of a more dovish Fed, narrowing the rate differential and aiding EUR/USD\'s rebound.'
                    },
                    {
                      title: 'Improved Eurozone Fundamentals',
                      description: 'Better periphery spreads and stronger Eurozone equities have boosted overall sentiment toward the EUR.'
                    },
                    {
                      title: 'Fading USD Premium',
                      description: 'The U.S. government shutdown temporarily lifted short-term USD funding demand; with the reopening underway, CA expects this premium to ease.'
                    }
                  ].map((factor, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{factor.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-600 mt-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Week Ahead</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Looking ahead to next week, attention turns to Eurozone PMIs, negotiated wage data, and a slate of ECB speeches (Lagarde, Lane, Nagel, Kocher, de Guindos). Markets will be alert to any hints of movement away from the ECB's current neutral stance.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative text-center space-y-4">
                <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-300" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  This report aggregates institutional-grade analysis from the world's leading investment banks and financial institutions.
                </p>
                <p className="text-gray-300 font-semibold">
                  Subscribe to receive daily institutional insights covering currency markets, central bank policy, and expert trade recommendations.
                </p>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg"
                  >
                    Subscribe for Full Access
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </div>
    )}
    {showDocument && (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 animate-in fade-in duration-300">
        <button
          onClick={() => setShowDocument(false)}
          className="fixed top-6 right-6 text-white hover:text-purple-400 transition-all z-[60] bg-black/80 hover:bg-black rounded-full p-3 shadow-xl border border-gray-800 hover:border-purple-500"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="h-full overflow-y-auto py-8 px-4">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide mb-4 border border-white/30">
                WEEKLY NEWSLETTER
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Newsletter 16/11/25</h1>
              <p className="text-gray-300 text-lg mb-6">Weekly FX Market Outlook & Strategic Analysis</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span className="opacity-90">Published: November 16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span className="opacity-90">G10 FX Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span className="opacity-90">Institutional Insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 space-y-10 bg-gradient-to-b from-gray-50 to-white">
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Weekly Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                This is a data-heavy week, with attention centred on Friday's US labour market report. The
                AI-tech-driven sell-off has persisted, though we expect it to stabilise somewhat, allowing
                sentiment to recover. Short-end yields in the US and Canada continue to rebound,
                supporting dollar upside into the FOMC and then the NFP, in our view.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                In the UK, CPI is expected to cool by around 20 bps, which should put pressure on the GBP
                in the early part of the week. The long end of the curve also remains a headwind for
                sterling, following last week's political noise surrounding Rachel Reeves.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                At the market open, our focus will be on equity performance and whether US yields
                continue to grind higher—both key elements underpinning our constructive dollar outlook.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Events This Week</h2>
              </div>
              <div className="grid gap-4">
                {[
                  'Canada CPI m/m, Monday 17th November @ 1:30pm GMT',
                  'Australia Wage Price Index, Wednesday 19th November @ 12:30am GMT',
                  'UK CPI y/y, Wednesday 19th November @ 7:00am GMT',
                  'FOMC Meeting Minutes, Thursday 20th November @ 7:00pm GMT',
                  'US Labour Market Data, Thursday 20th November @ 1:30pm GMT',
                  'UK Retail Sales, Friday 21st November @ 7:00am GMT',
                  'European/US & UK PMI, Friday 21st November @ 8:30am GMT'
                ].map((finding, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gradient-to-r from-gray-50/50 to-slate-50/50 rounded-lg border border-gray-200/50 hover:border-gray-300 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">→</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Currency Outlooks</h2>
              </div>

              <div className="space-y-6">
                <div className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 rounded-full">
                    <span className="text-white text-sm font-bold">BULLISH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">USD: Bullish</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    The U.S. dollar continues to consolidate as markets await a clear macro catalyst, with this
                    week's labour market report positioned as the key driver. Treasury yields remain biased to
                    the upside, reflecting increasingly hawkish commentary from Federal Reserve officials.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With equity sentiment weakening, the greenback is likely to stay on the
                    front foot until labour market data provides greater clarity on the Fed's next steps.
                  </p>
                </div>

                <div className="relative p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 rounded-full">
                    <span className="text-white text-sm font-bold">BEARISH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">GBP: Bearish</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Much of the UK's fundamental weakness appears already reflected in sterling's valuation.
                    Economic data remains broadly disappointing, fiscal uncertainty persists following the latest
                    budget announcements, and the probability of a BoE rate cut in December continues to rise.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We expect a modest GBP rebound early in the week before the broader downtrend
                    resumes. This week's inflation data—expected to cool—could act as the catalyst for renewed
                    GBP weakness should the release print in line with consensus.
                  </p>
                </div>

                <div className="relative p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 rounded-full">
                    <span className="text-white text-sm font-bold">BULLISH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">EUR: Bullish</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The euro remains broadly uneventful, with limited Eurozone-specific catalysts. Short-end
                    yields are grinding higher, offering marginal support, but not enough to materially shift the
                    narrative. EUR crosses continue to be driven more by
                    counterpart dynamics than by domestic fundamentals.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-gray-900 p-8 rounded-xl shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                <h2 className="text-3xl font-bold">Institutional Insights</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-600 pl-4">
                  <h4 className="font-bold text-gray-200 mb-2 text-lg">Credit Agricole on USD</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    The USD rally from early October is meeting its first real challenge as softer labour data and tariff
                    uncertainty cool the hawkish Fed repricing. Once the shutdown lifts and data resumes, the economic
                    damage could embolden dovish voices at the Fed, while the unwinding of Treasury cash hoarding may
                    also erode the USD's liquidity premium.
                  </p>
                </div>
                <div className="border-l-4 border-gray-600 pl-4">
                  <h4 className="font-bold text-gray-200 mb-2 text-lg">Bank of America on USD</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Front-end rate differentials are once again the main driver of the U.S. dollar, with the DXY now
                    more sensitive to 2-year spreads than at any time since early 2025. A 10bp move in rate differentials
                    is currently producing an estimated 0.4% shift in the index, making upcoming U.S. data especially
                    important.
                  </p>
                </div>
                <div className="border-l-4 border-gray-600 pl-4">
                  <h4 className="font-bold text-gray-200 mb-2 text-lg">Goldman Sachs on GBP</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Goldman maintains a bearish bias on GBP heading into December, citing a mismatch between weakening
                    UK economic data and still-elevated BoE policy expectations, alongside a likely contractionary
                    Autumn Budget. The balance of risks is tilted lower for Sterling.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Trade Ideas</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">DXY: Further Upside Expected</h3>
                    <div className="px-3 py-1 bg-green-600 rounded-full">
                      <span className="text-white text-sm font-bold">LONG</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As mentioned, the bounce from the 99 handle made sense. We expect further upside driven by
                    rising short-end yields and hawkish Fed commentary supporting dollar strength into NFP data.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">GBPAUD: Reaction at 2.03</h3>
                    <div className="px-3 py-1 bg-blue-600 rounded-full">
                      <span className="text-white text-sm font-bold">WATCH</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The 2.03 handle looks attractive for a reaction. GBP weakness against commodity currencies
                    presents opportunities as UK data disappoints and BoE cut expectations rise.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">USDCAD: Tactical Setup</h3>
                    <div className="px-3 py-1 bg-amber-600 rounded-full">
                      <span className="text-white text-sm font-bold">LONG</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This makes sense fundamentally. While CAD has support from oil and strong data, USD
                    strength should dominate near-term. Watch for entry on pullbacks to key support levels.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-300 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">AUDJPY: Eyes on 100.00</h3>
                    <div className="px-3 py-1 bg-purple-600 rounded-full">
                      <span className="text-white text-sm font-bold">LONG</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    My eyes are on the 100.00 handle. Risk sentiment improvement and AUD resilience from
                    strong labour data support this trade, while JPY remains under pressure.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative text-center space-y-4">
                <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-2">
                  <Settings className="w-6 h-6 text-gray-300" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  This is a sample preview showcasing the depth and quality of our weekly FX market analysis and institutional research.
                </p>
                <p className="text-gray-300 font-semibold">
                  Subscribe to receive comprehensive weekly newsletters covering G10 FX analysis, trade ideas,
                  institutional insights from major banks, and detailed technical setups.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg"
                    onClick={() => setShowDocument(false)}
                  >
                    Subscribe to Weekly Newsletter
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 font-semibold"
                    onClick={() => setShowDocument(true)}
                  >
                    View Sample Report
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </div>
    )}
    <div className="bg-black min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Exclusive Macro<span className="block">Economic Documents,</span>
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Insights & Data.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Access institutional-grade intelligence, forecasts, and analysis designed for economists, investors, and global decision-makers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-purple-500/50"
                onClick={() => document.getElementById('data')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-3xl rounded-full"></div>
            <div className="relative space-y-4 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Market Overview</span>
                <span className="text-xs text-purple-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>Live</span>
              </div>

              <div className="flex animate-scroll-right whitespace-nowrap">
                <div className="flex gap-4 min-w-max">
                  <img src="{imageUrls["btc.png"]}" alt="BTC/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["card_1.png"]}" alt="XAU/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["eth.png"]}" alt="ETH/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["gbpusd.png"]}" alt="GBP/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["image copy.png"]}" alt="USD/JPY" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
                <div className="flex gap-4 min-w-max ml-4" aria-hidden="true">
                  <img src="{imageUrls["btc.png"]}" alt="BTC/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["card_1.png"]}" alt="XAU/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["eth.png"]}" alt="ETH/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["gbpusd.png"]}" alt="GBP/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["image copy.png"]}" alt="USD/JPY" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
              </div>

              <div className="flex animate-scroll-right whitespace-nowrap" style={{ animationDelay: '-6.67s' }}>
                <div className="flex gap-4 min-w-max">
                  <img src="{imageUrls["eur1.png"]}" alt="EUR/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["gj.png"]}" alt="GBP/JPY" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["google.png"]}" alt="GOOGL/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["oil copy.png"]}" alt="WTI/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["btc.png"]}" alt="BTC/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
                <div className="flex gap-4 min-w-max ml-4" aria-hidden="true">
                  <img src="{imageUrls["eur1.png"]}" alt="EUR/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["gj.png"]}" alt="GBP/JPY" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["google.png"]}" alt="GOOGL/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["oil copy.png"]}" alt="WTI/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["btc.png"]}" alt="BTC/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
              </div>

              <div className="flex animate-scroll-right whitespace-nowrap" style={{ animationDelay: '-13.33s' }}>
                <div className="flex gap-4 min-w-max">
                  <img src="{imageUrls["eth.png"]}" alt="ETH/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["nvda.png"]}" alt="NVDA/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["eur1.png"]}" alt="EUR/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["card_1.png"]}" alt="XAU/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
                <div className="flex gap-4 min-w-max ml-4" aria-hidden="true">
                  <img src="{imageUrls["eth.png"]}" alt="ETH/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["nvda.png"]}" alt="NVDA/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["eur1.png"]}" alt="EUR/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                  <img src="{imageUrls["card_1.png"]}" alt="XAU/USD" className="h-32 rounded-2xl border border-purple-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="data" className="py-32 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Industry-Leading Macroeconomic Data',
                description: 'In-depth market analysis, global trends, and economic signals in one centralized platform.',
                gradient: 'from-purple-500/10 to-violet-500/10',
                border: 'border-purple-500/30'
              },
              {
                icon: TrendingUp,
                title: 'Institutional FX Insights',
                description: 'Gain a clear view of where major banks expect key currencies to move, supported by comprehensive macroeconomic analysis.',
                gradient: 'from-violet-500/10 to-purple-600/10',
                border: 'border-violet-500/30'
              },
              {
                icon: Globe2,
                title: 'Global Coverage',
                description: 'Track commodities, geopolitical developments, and key market drivers affecting global markets and investment decisions.',
                gradient: 'from-purple-600/10 to-indigo-500/10',
                border: 'border-purple-600/30'
              },
              {
                icon: FileText,
                title: 'Daily Intelligence Briefings',
                description: 'Actionable summaries delivered every morning to help users stay ahead of the global economy.',
                gradient: 'from-indigo-500/10 to-purple-500/10',
                border: 'border-teal-500/30'
              },
            ].map((feature, i) => {
              const isBriefingsCard = feature.title === 'Daily Intelligence Briefings';
              const isInstitutionalCard = feature.title === 'Institutional FX Insights';
              const isGlobalCoverageCard = feature.title === 'Global Coverage';
              const isMacroDataCard = feature.title === 'Industry-Leading Macroeconomic Data';
              const isClickable = isBriefingsCard || isInstitutionalCard || isGlobalCoverageCard || isMacroDataCard;

              const cardContent = (
                <>
                  <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  {isClickable && (
                    <Button
                      variant="outline"
                      className="mt-4 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                    >
                      Preview
                    </Button>
                  )}
                </>
              );

              if (isBriefingsCard) {
                return (
                  <Link key={i} href="/briefings">
                    <Card
                      className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                      {cardContent}
                    </Card>
                  </Link>
                );
              }

              if (isInstitutionalCard) {
                return (
                  <Card
                    key={i}
                    className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    onClick={() => setShowInstitutionalInsights(true)}
                  >
                    {cardContent}
                  </Card>
                );
              }

              if (isGlobalCoverageCard) {
                return (
                  <Link key={i} href="/global-coverage">
                    <Card
                      className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                      {cardContent}
                    </Card>
                  </Link>
                );
              }

              if (isMacroDataCard) {
                return (
                  <Link key={i} href="/macro-data">
                    <Card
                      className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                      {cardContent}
                    </Card>
                  </Link>
                );
              }

              return (
                <Card
                  key={i}
                  className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} p-8 backdrop-blur-xl hover:scale-105 transition-transform duration-300`}
                >
                  {cardContent}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-400 tracking-[0.3em] uppercase mb-12 text-center">
            Trusted Outlets
          </h2>
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-24 px-12 min-w-max">
                <img src="{imageUrls["brandimage-Photoroom.png"]}" alt="Bloomberg" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["417-4172451_nasdaq-logo-nasdaq-logo-white-png-clipart-Photoroom.png"]}" alt="NASDAQ" className="h-14 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["Barrons_White.png"]}" alt="Barron's" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["cnbc-logo-white-Photoroom.png"]}" alt="CNBC" className="h-11 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["FT_Horizontal_FullColourREVERSED_RGB-Photoroom.png"]}" alt="Financial Times" className="h-10 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["reut.png"]}" alt="Reuters" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["images-Photoroom.png"]}" alt="WSJ" className="h-14 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["view2x-Photoroom.png"]}" alt="LSEG" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["Washington-Post-Photoroom.png"]}" alt="Washington Post" className="h-11 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["bbb-Photoroom.png"]}" alt="BBB" className="h-16 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
              </div>
              <div className="flex items-center gap-24 px-12 min-w-max" aria-hidden="true">
                <img src="{imageUrls["brandimage-Photoroom.png"]}" alt="Bloomberg" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["417-4172451_nasdaq-logo-nasdaq-logo-white-png-clipart-Photoroom.png"]}" alt="NASDAQ" className="h-14 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["Barrons_White.png"]}" alt="Barron's" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["cnbc-logo-white-Photoroom.png"]}" alt="CNBC" className="h-11 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["FT_Horizontal_FullColourREVERSED_RGB-Photoroom.png"]}" alt="Financial Times" className="h-10 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["reut.png"]}" alt="Reuters" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["images-Photoroom.png"]}" alt="WSJ" className="h-14 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["view2x-Photoroom.png"]}" alt="LSEG" className="h-12 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["Washington-Post-Photoroom.png"]}" alt="Washington Post" className="h-11 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
                <img src="{imageUrls["bbb-Photoroom.png"]}" alt="BBB" className="h-16 opacity-40 hover:opacity-60 transition-opacity grayscale flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intelligence-access" className="py-32 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Access Intelligence You Won't Find Elsewhere
            </h2>
            <ul className="space-y-4">
              {[
                'Exclusive reports from global analysts',
                'Proprietary macro datasets',
                'Deep-dive PDFs & institutional documents'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 font-semibold"
                >
                  Find Out More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 blur-3xl"></div>
            <Card className="relative bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-purple-500/30 p-12 backdrop-blur-xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Sample Report</span>
                  <Settings className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Weekly Outlook Sample (16/11/25)
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  This report represents the caliber of weekly research produced at Cognito to support informed decision-making across global markets. It delivers an integrated assessment of macroeconomic indicators, yield movements, geopolitical developments, and other key market drivers. Additionally, it incorporates forward-looking insights from major financial institutions to provide a well-rounded, expert perspective for the week ahead.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Analysts Involved</div>
                    <div className="text-xl font-bold text-white">5</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Charts</div>
                    <div className="text-xl font-bold text-white">43</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Sources</div>
                    <div className="text-xl font-bold text-white">20+</div>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-semibold"
                  onClick={() => setShowDocument(true)}
                >
                  View Sample Report
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="institutional-access" className="py-32 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Institutional Access
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the plan that matches your ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-zinc-950 to-black border-gray-800 p-8 backdrop-blur-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Essential</h3>
                <p className="text-gray-400 mb-4">Start your journey</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">Free</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Limited Institutional FX Research',
                  'Bi-weekly Newsletter',
                  'Limited Educational Resources'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="https://discord.gg/8kTcurqRwG" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-700 text-white hover:bg-white/5"
                >
                  Join Here
                </Button>
              </Link>
            </Card>

            <Card className="relative bg-gradient-to-br from-zinc-950 to-black border-blue-500/50 p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/20 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-gray-400 mb-4">For serious traders</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">£20</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Educational Resources',
                  'Institutional FX Research',
                  'Weekly Macro Briefings',
                  'Institutional currency analysis',
                  'Weekly Recorded FX Outlook'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/50"
                onClick={handleSubscribe}
                disabled={checkoutLoading}
              >
                {checkoutLoading ? 'Loading...' : 'Subscribe Now'}
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-950 to-black border-gray-800 p-8 backdrop-blur-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Elite Mentorship</h3>
                <p className="text-gray-400 mb-4">Expert guidance</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">1-1 Mentorship</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Weekly 1-1 Sessions',
                  'Access To All Research Tools',
                  'Monthly Performance Reviews',
                  '24/7 Access To Mentors',
                  'Direct Feedback On Trade Ideas'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <ContactFormDialog
                triggerText="Enquire"
                triggerClassName="w-full border-gray-700 text-white hover:bg-white/5 h-11 rounded-md px-8 border bg-background hover:text-accent-foreground"
              />
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews-section" className="py-32 px-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide mb-6 border border-purple-500/30 text-purple-400">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted by Market Professionals
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              See what institutional investors and traders say about Cognito's research platform
            </p>
          </div>

          <div className="relative mb-20">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex gap-8 px-4 min-w-max">
                {[
                  {
                    name: "Bernardo C.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "For anyone looking for the right mentorship, macro info, unbiased insights about the market...there really isn't a better place to be. Can't say enough things about Cognito Updates.",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Daaj.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "Great work on the daily newsletter gents, really helpful stuff👏 I've been collating notes on all of the mentorship stuff so far and cant thank you enough, my trading has improved massively.",
                    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Ben B.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "Just wanted to drop a quick comment to say how impressed I was with the structure and clarity of this macroeconomic analysis. It breaks down complex concepts in a way that's both accessible and insightful—really well done🙌🙌",
                    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Thomas M.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "I've been in plenty of research and FX discussion groups, but none come close to this one. The daily breakdowns are sharp, the trade ideas are grounded in real macro reasoning, and the team actually explains the why behind every view.",
                    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Bodi A.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "The weekly outlooks alone are worth the subscription, and the intraday commentary helps me stay on top of market flows without getting overwhelmed. I've seen a noticeable improvement in my FX performance since joining.",
                    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  }
                ].map((review, index) => (
                  <Card
                    key={index}
                    className="relative bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-gray-800 p-8 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden w-[420px] flex-shrink-0"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <Quote className="w-10 h-10 text-purple-500/30" />
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-8 text-lg whitespace-normal">
                        "{review.text}"
                      </p>

                      <div className="pt-6 border-t border-gray-800">
                        <div className="whitespace-normal">
                          <div className="font-semibold text-white">{review.name}</div>
                          {review.role && <div className="text-sm text-gray-400">{review.role}</div>}
                          {review.company && <div className="text-xs text-gray-500 mt-0.5">{review.company}</div>}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="flex gap-8 px-4 min-w-max" aria-hidden="true">
                {[
                  {
                    name: "Bernardo C.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "For anyone looking for the right mentorship, macro info, unbiased insights about the market...there really isn't a better place to be. Can't say enough things about Cognito Updates.",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Daaj.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "Great work on the daily newsletter gents, really helpful stuff👏 I've been collating notes on all of the mentorship stuff so far and cant thank you enough, my trading has improved massively.",
                    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Ben B.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "Just wanted to drop a quick comment to say how impressed I was with the structure and clarity of this macroeconomic analysis. It breaks down complex concepts in a way that's both accessible and insightful—really well done🙌🙌",
                    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Thomas M.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "I've been in plenty of research and FX discussion groups, but none come close to this one. The daily breakdowns are sharp, the trade ideas are grounded in real macro reasoning, and the team actually explains the why behind every view.",
                    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  },
                  {
                    name: "Bodi A.",
                    role: "",
                    company: "",
                    rating: 5,
                    text: "The weekly outlooks alone are worth the subscription, and the intraday commentary helps me stay on top of market flows without getting overwhelmed. I've seen a noticeable improvement in my FX performance since joining.",
                    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
                  }
                ].map((review, index) => (
                  <Card
                    key={`duplicate-${index}`}
                    className="relative bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-gray-800 p-8 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden w-[420px] flex-shrink-0"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <Quote className="w-10 h-10 text-purple-500/30" />
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-8 text-lg whitespace-normal">
                        "{review.text}"
                      </p>

                      <div className="pt-6 border-t border-gray-800">
                        <div className="whitespace-normal">
                          <div className="font-semibold text-white">{review.name}</div>
                          {review.role && <div className="text-sm text-gray-400">{review.role}</div>}
                          {review.company && <div className="text-xs text-gray-500 mt-0.5">{review.company}</div>}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-32">
            <Card className="inline-block bg-gradient-to-br from-zinc-950 via-zinc-950 to-black border-purple-500/30 p-12 max-w-3xl">
              <div className="space-y-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-purple-500 text-purple-500" />
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
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-sm text-gray-500">Professional Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-sm text-gray-500">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-500">Platform Access</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'What type of data do you provide?',
                a: 'We provide comprehensive macroeconomic data including GDP trends, inflation metrics, employment statistics, central bank policies, commodity prices, currency movements, and geopolitical risk assessments across global markets.'
              },
              {
                q: 'How frequently is the data updated?',
                a: 'Our platform updates in real-time for market data, with daily briefings published each morning and comprehensive weekly reports. In-depth quarterly analyses are released with monthly updates for key economic indicators.'
              },
              {
                q: 'Are all reports from real financial institutions?',
                a: 'Yes, all our research is sourced directly from leading financial institutions, central banks, and accredited research organizations worldwide. We aggregate and deliver insights from the most trusted voices in global finance.'
              },
              {
                q: 'Is all data saved so I can access it anytime?',
                a: 'Yes, all reports and data are permanently archived in your account. You have unlimited access to your complete history of briefings, research, and market data whenever you need it.'
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-900 rounded-lg px-6 bg-zinc-950/50"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
    </>
  );
}

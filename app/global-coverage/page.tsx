'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingDown, AlertTriangle, Globe2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function GlobalCoverage() {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300 z-[100]">
        <Link href="/">
          <Button
            variant="ghost"
            className="fixed top-6 left-6 text-white hover:text-blue-400 transition-all z-[101] bg-black/80 hover:bg-black rounded-full p-3 shadow-xl border border-gray-800 hover:border-blue-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>

        <div className="h-full overflow-y-auto py-8 px-4">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 p-12 text-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative">
                <div className="inline-block px-4 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide mb-4 border border-blue-400/30">
                  GLOBAL COVERAGE
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Global Markets Intelligence</h1>
                <p className="text-gray-300 text-lg mb-6">Comprehensive insights across equities, commodities, geopolitics, and monetary policy</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="opacity-90">Published: November 21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="opacity-90">Multi-Asset Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="opacity-90">Geopolitical Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12 space-y-10 bg-gradient-to-b from-gray-50 to-white">
              <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-800 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900">OPEC+ Tracker</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-600">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingDown className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-gray-900 text-lg">WTI Crude Market Update</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Oil prices continued to drift lower this week but signs are emerging that the pace of decline is easing. With much of the supply glut now likely reflected in prices, there is potential for WTI crude to stabilize around 55 handle, even if near-term weakness extends.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      The downtrend persisted since OPEC and its allies started expanding production earlier in the year, and major institutions warn that oversupply may persist well into next year. Last week's IEA forecast reinforced bearish sentiment, warning that the global oil market could swing into a 4 million barrel-per-day surplus by in. The agency cited sustained output growth and sluggish demand as key drivers.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Supply Dynamics</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>OPEC+ production increases accelerating</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>US shale output reaching new highs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Saudi Arabia easing voluntary cuts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Demand Outlook</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>China demand remains subdued</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Global growth forecasts revised lower</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>EV adoption pressuring long-term demand</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600 mt-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Technical Levels to Watch</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Support</p>
                        <p className="text-2xl font-bold text-gray-900">$55.00</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Current</p>
                        <p className="text-2xl font-bold text-amber-600">$56.75</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Resistance</p>
                        <p className="text-2xl font-bold text-gray-900">$62.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-rose-800 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900">Geopolitics Tracker</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-600">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h4 className="font-bold text-gray-900 text-lg">Key Developments This Week</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Geopolitical tensions remain elevated across multiple theaters, with market participants closely monitoring developments that could impact global trade, commodity flows, and risk sentiment.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Trump Administration Policy Signals</h4>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            President Trump's recent speeches have emphasized renewed focus on tariff policies and trade negotiations. Markets are parsing language around potential tariff escalation with China and Europe, which could impact supply chains and inflation expectations.
                          </p>
                          <p className="text-sm text-gray-600 italic">Market Impact: USD volatility expected, particularly in CNH crosses</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Middle East Tensions</h4>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            Regional tensions remain elevated following recent diplomatic developments. Energy markets continue to price in a modest risk premium, though immediate supply disruption fears have eased. Iran nuclear negotiations remain stalled, with Western nations maintaining sanctions pressure.
                          </p>
                          <p className="text-sm text-gray-600 italic">Market Impact: Oil risk premium, safe-haven flows into CHF and JPY</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">China-Taiwan Developments</h4>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            Cross-strait rhetoric has intensified following recent military exercises in the Taiwan Strait. US officials have reiterated security commitments, while Beijing has warned against external interference. Regional currencies and tech supply chains remain sensitive to escalation risks.
                          </p>
                          <p className="text-sm text-gray-600 italic">Market Impact: Tech sector volatility, CNY/TWD weakness, JPY strength</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">European Political Landscape</h4>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            Political uncertainty in key European economies continues to weigh on sentiment. French budget negotiations face parliamentary hurdles, while German coalition talks progress slowly. The ECB has acknowledged political risks but maintains focus on inflation targets.
                          </p>
                          <p className="text-sm text-gray-600 italic">Market Impact: EUR volatility, periphery spread widening potential</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-blue-200/50">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Russia-Ukraine Ongoing Situation</h4>
                          <p className="text-gray-700 leading-relaxed mb-2">
                            The conflict continues with no clear diplomatic breakthrough on the horizon. Energy security remains a key concern for Europe heading into winter months. Sanctions enforcement and workarounds continue to evolve, affecting trade flows and commodity pricing.
                          </p>
                          <p className="text-sm text-gray-600 italic">Market Impact: European natural gas prices, RUB volatility, grain markets</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-600 mt-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Week Ahead: Events to Monitor</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Trump scheduled speech on trade policy (Tuesday)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>OPEC+ Joint Ministerial Monitoring Committee meeting (Thursday)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>G7 Finance Ministers virtual summit (Friday)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>EU-China trade delegation talks continue in Brussels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 p-8 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative text-center space-y-4">
                  <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-2">
                    <Globe2 className="w-6 h-6 text-blue-300" />
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
                    This report provides comprehensive coverage of global markets, commodities, and geopolitical developments that impact investment decisions.
                  </p>
                  <p className="text-gray-300 font-semibold">
                    Subscribe to receive daily global coverage reports featuring in-depth analysis of commodities, equities, monetary policy, and geopolitical risks.
                  </p>
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg"
                      onClick={async () => {
                        try {
                          const response = await fetch('/api/checkout', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ plan: 'professional' }),
                          });
                          const data = await response.json();
                          if (data.url) window.location.href = data.url;
                        } catch (error) {
                          console.error('Checkout error:', error);
                          alert('Failed to start checkout. Please try again.');
                        }
                      }}
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
    </div>
  );
}

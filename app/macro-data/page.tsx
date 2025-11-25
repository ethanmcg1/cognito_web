'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MacroDataReport() {
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
            className="fixed top-6 left-6 text-white hover:text-purple-400 transition-all z-[101] bg-black/80 hover:bg-black rounded-full p-3 shadow-xl border border-gray-800 hover:border-purple-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>

        <div className="h-full overflow-y-auto py-8 px-4">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header Section */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-12 text-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0zMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

              <div className="relative flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <img src="/2821378.png" alt="Cognito" className="w-10 h-10" />
                  </div>
                </div>
              </div>

              <div className="relative text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">MACROECONOMIC DATA REPORT</h1>
                <p className="text-2xl text-gray-300 mb-2">November 2025</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="p-12 border-b border-gray-200">
              <p className="text-gray-800 text-lg leading-relaxed">
                This comprehensive macroeconomic data report provides institutional-grade analysis across key indicators
                that drive global markets. Our research synthesizes critical data points from risk sentiment metrics,
                Federal Reserve policy expectations, labor market dynamics, and sovereign bond markets to deliver
                actionable insights for informed decision-making.
              </p>
            </div>

            {/* Risk Sentiment Section */}
            <div className="p-12 bg-gray-50 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Sentiment Analysis</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Market Positioning</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Risk appetite remains constructive as equities continue to grind higher, supported by resilient
                  corporate earnings and expectations for a soft landing. The VIX has compressed below the 15 handle,
                  signaling complacency in equity volatility markets, while credit spreads remain tight across both
                  investment-grade and high-yield segments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'VIX Index', value: '14.2', change: '-2.1%', trend: 'down' },
                  { label: 'SPX', value: '5,847', change: '+0.8%', trend: 'up' },
                  { label: 'HY Credit Spread', value: '312 bps', change: '-8 bps', trend: 'down' },
                  { label: 'MOVE Index', value: '97.3', change: '+1.2%', trend: 'up' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{item.label}</span>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                      <span className={`font-semibold ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Key Takeaway</h4>
                <p className="text-blue-800">
                  Risk-on sentiment is dominating flows, with momentum indicators suggesting further upside potential.
                  However, the low VIX reading warrants caution as positioning appears stretched, leaving markets
                  vulnerable to sharp reversals should macro conditions deteriorate.
                </p>
              </div>
            </div>

            {/* CME Dot Plot Section */}
            <div className="p-12 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CME FedWatch & Rate Expectations</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fed Funds Futures Pricing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  CME Fed Funds futures are pricing in a terminal rate of 3.75-4.00% by mid-2026, with markets
                  anticipating the Federal Reserve will hold rates steady through Q1 2026 before beginning a gradual
                  easing cycle. The implied probability of a rate cut at the December 2025 meeting stands at 68%,
                  reflecting growing confidence that inflation is returning to target.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Implied Rate Path (Next 12 Months)</h4>
                <div className="space-y-3">
                  {[
                    { date: 'Dec 2025', rate: '4.25-4.50%', probability: '68%', action: 'Cut Expected' },
                    { date: 'Mar 2026', rate: '4.00-4.25%', probability: '52%', action: 'Cut Expected' },
                    { date: 'Jun 2026', rate: '3.75-4.00%', probability: '44%', action: 'Hold/Cut' },
                    { date: 'Sep 2026', rate: '3.50-3.75%', probability: '31%', action: 'Cut Expected' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-semibold text-gray-900">{item.date}</span>
                        <span className="text-gray-600 text-sm ml-2">({item.probability})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{item.rate}</div>
                        <div className="text-sm text-gray-600">{item.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-2">Market Implications</h4>
                <p className="text-purple-800">
                  The Fed's data-dependent approach keeps rate volatility elevated. Current pricing suggests markets
                  have fully absorbed recent inflation prints and are positioning for a dovish pivot. Any upside
                  surprise in core PCE or employment data could trigger a rapid repricing of the curve.
                </p>
              </div>
            </div>

            {/* BLS Data Section */}
            <div className="p-12 bg-gray-50 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bureau of Labor Statistics Data</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Labor Market Health</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The October employment report showed nonfarm payrolls rising by 185,000, slightly above consensus
                  expectations of 175,000. The unemployment rate held steady at 3.8%, while average hourly earnings
                  grew 4.1% year-over-year, indicating wage pressures remain persistent but moderating. The labor
                  force participation rate ticked up to 63.3%, suggesting continued labor supply improvements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Unemployment Rate', value: '3.8%', change: 'Unchanged' },
                  { label: 'Nonfarm Payrolls', value: '+185K', change: 'vs +175K est.' },
                  { label: 'Avg Hourly Earnings (YoY)', value: '4.1%', change: 'vs 4.2% prior' },
                  { label: 'Labor Participation', value: '63.3%', change: '+0.1pp' },
                  { label: 'U6 Underemployment', value: '7.0%', change: '-0.2pp' },
                  { label: 'Job Openings (JOLTS)', value: '8.7M', change: '-0.3M' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                    <div className="text-sm text-gray-700">{item.change}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Sectoral Breakdown (Monthly Change)</h4>
                <div className="space-y-2">
                  {[
                    { sector: 'Healthcare', change: '+52K', strength: 'strong' },
                    { sector: 'Professional Services', change: '+38K', strength: 'strong' },
                    { sector: 'Retail Trade', change: '+24K', strength: 'moderate' },
                    { sector: 'Manufacturing', change: '+12K', strength: 'moderate' },
                    { sector: 'Construction', change: '-8K', strength: 'weak' },
                    { sector: 'Financial Activities', change: '-3K', strength: 'weak' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-900">{item.sector}</span>
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.strength === 'strong' ? 'bg-green-100 text-green-800' :
                          item.strength === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.strength}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-2">Assessment</h4>
                <p className="text-green-800">
                  The labor market continues to demonstrate resilience with solid job creation and stable unemployment.
                  The modest deceleration in wage growth is a positive signal for the Fed's inflation fight, while
                  rising participation suggests supply-side improvements. Sectoral breadth remains healthy across
                  services, supporting the soft-landing narrative.
                </p>
              </div>
            </div>

            {/* Government Yields Section */}
            <div className="p-12 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Yields & Bond Markets</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treasury Yield Curve Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The U.S. Treasury curve has steepened modestly over the past month, with 2-year yields pulling back
                  from recent highs as rate cut expectations firm. The 2s10s spread has widened to +35 basis points,
                  moving further into positive territory and signaling improved growth expectations. Real yields remain
                  elevated, providing support for the dollar while weighing on gold and duration-sensitive assets.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { tenor: '2Y', yield: '4.32%', change: '-6 bps' },
                  { tenor: '5Y', yield: '4.18%', change: '-2 bps' },
                  { tenor: '10Y', yield: '4.67%', change: '+4 bps' },
                  { tenor: '30Y', yield: '4.89%', change: '+7 bps' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">US {item.tenor}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.yield}</div>
                    <div className={`text-sm font-semibold ${item.change.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Spread Metrics</h4>
                <div className="space-y-3">
                  {[
                    { spread: '2s10s', value: '+35 bps', change: '+8 bps', signal: 'Steepening' },
                    { spread: '5s30s', value: '+71 bps', change: '+12 bps', signal: 'Steepening' },
                    { spread: '10Y Real Yield', value: '2.14%', change: '+3 bps', signal: 'Higher Real Rates' },
                    { spread: '10Y Breakeven', value: '2.53%', change: '+1 bp', signal: 'Stable Inflation Exp.' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-semibold text-gray-900">{item.spread}</span>
                        <span className="text-gray-600 text-sm ml-2">{item.signal}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{item.value}</div>
                        <div className="text-sm text-gray-600">{item.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Global Sovereign Yields</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { country: 'Germany 10Y', yield: '2.38%', change: '+5 bps' },
                    { country: 'UK 10Y (Gilt)', yield: '4.52%', change: '+8 bps' },
                    { country: 'Japan 10Y (JGB)', yield: '1.08%', change: '+2 bps' },
                    { country: 'Australia 10Y', yield: '4.73%', change: '+6 bps' },
                    { country: 'Canada 10Y', yield: '3.89%', change: '+3 bps' },
                    { country: 'Italy 10Y (BTP)', yield: '3.82%', change: '+11 bps' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-900">{item.country}</span>
                      <div className="text-right">
                        <span className="font-bold text-gray-900 mr-3">{item.yield}</span>
                        <span className={`text-sm font-semibold ${item.change.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 className="font-semibold text-indigo-900 mb-2">Market Outlook</h4>
                <p className="text-indigo-800">
                  The steepening curve reflects improving growth optimism and declining recession fears, while
                  persistent real yield elevation continues to support USD strength. European yields remain anchored
                  by ECB dovishness, widening rate differentials that favor USD crosses. Watch for shifts in long-end
                  dynamics as fiscal concerns and term premium adjustments come into focus.
                </p>
              </div>
            </div>

            {/* Author Section */}
            <div className="p-12 bg-gray-50 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Research Team</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Ethan M</p>
                  <p className="text-gray-600">Head of Macro Research</p>
                  <p className="text-gray-600">ofob@cognitoupdates.co.uk</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Harry S</p>
                  <p className="text-gray-600">Senior Rates Strategist</p>
                  <p className="text-gray-600">vosk@cognitoupdates.co.uk</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-12 bg-gray-100 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Disclaimer</h3>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  This publication has been prepared by Cognito Updates solely for informational purposes without regard
                  to any particular user's objectives, financial situation, or needs. The information contained herein
                  does not constitute investment, legal, tax, or other professional advice, nor should it be construed
                  as an offer or solicitation to buy or sell any product, service, or financial instrument.
                </p>
                <p>
                  Reasonable care has been taken to ensure that the information provided is accurate and up to date at
                  the time of publication; however, Cognito Updates makes no representation or warranty, express or implied,
                  as to its completeness, accuracy, or reliability. Cognito Updates accepts no liability for any direct,
                  indirect, or consequential loss arising from any use of this publication or its contents.
                </p>
                <p>
                  Unless otherwise stated, any opinions, forecasts, or estimates expressed are those of the author(s)
                  at the date of publication and are subject to change without notice.
                </p>
                <p>
                  The distribution of this publication may be restricted by law or regulation in certain jurisdictions.
                  Persons in possession of this publication are required to inform themselves of, and observe, any such
                  restrictions.
                </p>
                <p>
                  Copyright and database rights protection apply to this publication. It may not be reproduced, distributed,
                  or published, in whole or in part, for any purpose without the prior written consent of Cognito Updates.
                  All rights reserved.
                </p>
              </div>
            </div>

            {/* Footer with Cognito branding */}
            <div className="p-8 bg-gray-900 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <img src="/2821378.png" alt="Cognito" className="w-5 h-5" />
                </div>
                <span className="text-white font-bold text-lg">COGNITO</span>
              </div>
              <p className="text-gray-400 text-sm">Prepared by Cognito Macro Research | November 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

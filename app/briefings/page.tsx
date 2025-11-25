'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function DailyBriefing() {
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
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">FX MORNING BRIEF</h1>
                <p className="text-2xl text-gray-300 mb-2">11/11/25</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="p-12 border-b border-gray-200">
              <p className="text-gray-800 text-lg leading-relaxed">
                In the US, the Senate passed a bill on Monday to end the longest government shutdown in US history,
                with nearly all Republicans and eight Democrats supporting the deal. Markets seem to be in a ranging
                mood as of this morning, sentiment remains on however equities are range bound as we await for the
                NYSE open. The bill now moves to the House for approval before heading to President Trump for his signature.
              </p>
            </div>

            {/* Market Snapshot */}
            <div className="p-12 bg-gray-50 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Snapshot - 11/11/25</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'DXY', value: '-0.15%' },
                  { label: 'US02Y', value: '-0.5%' },
                  { label: 'USD/JPY', value: '+0.1%' },
                  { label: 'VIX', value: '-3%' },
                  { label: 'SPX', value: '-0.3%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="font-semibold text-gray-900">{item.label}</span>
                    <span className={`font-bold ${item.value.startsWith('+') ? 'text-green-600' : item.value.startsWith('-') ? 'text-red-600' : 'text-gray-900'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currency Analysis Sections */}
            <div className="p-12 space-y-8">
              {/* GBP */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GBP</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sterling is holding relatively firm this morning despite softer-than-expected UK labour market data,
                  which has seen unemployment climb to a four-year high. The release has pushed market pricing decisively
                  toward a December rate cut, with short-end yields breaking below the 3.75% handle. However, the FX
                  reaction has been notably contained — suggesting much of the negative sentiment toward the pound may
                  already be priced in. Last week's relief rally reinforces this view and highlights the potential for
                  short-term rebounds from key technical levels, particularly as mean reversion plays out.
                </p>
              </div>

              {/* USD */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">USD</h3>
                <p className="text-gray-700 leading-relaxed">
                  The dollar remains range-bound as markets weigh rising short-end Treasury yields against improving
                  risk sentiment tied to the potential resolution of the U.S. government shutdown. While the DXY briefly
                  tested the 100.00 handle, it failed to break higher, underlining persistent uncertainty around the
                  greenback's direction. With sentiment capping further upside, we see scope for tactical bounces at
                  key support levels, though any sustained USD strength is likely to remain limited until fresh macro
                  data provides clearer direction.
                </p>
              </div>

              {/* JPY */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">JPY</h3>
                <p className="text-gray-700 leading-relaxed">
                  The yen continues to face depreciation pressures, driven largely by sentiment rather than yield dynamics,
                  as short-end yields remain range-bound while the long end stays elevated. Market focus is intensifying
                  around the 155 and 160 levels in USD/JPY and GBP/JPY, where intervention fears could resurface. Last
                  week's reportedly "successful" meeting in Japan between Takaichi and Trump has done little to arrest
                  the yen's slide, and traders are likely to remain alert to potential policy signals from Tokyo as these
                  critical thresholds approach.
                </p>
              </div>

              {/* AUD / NZD */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AUD / NZD</h3>
                <p className="text-gray-700 leading-relaxed">
                  Both antipodean currencies remain underpinned by improving risk appetite and favourable rate differentials.
                  The rebound in equities and a subdued VIX continue to support AUD and NZD across the board. As long as
                  broader sentiment holds steady and global growth expectations remain intact, we expect both currencies
                  to stay bid — particularly against funding currencies — though gains may moderate near key resistance levels.
                </p>
              </div>

              {/* CHF */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CHF</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Swiss franc is seeing limited movement, supported in part by gold's close above the 4,100 handle
                  yesterday. However, the recovery in global risk sentiment — alongside headlines suggesting a possible
                  resolution to the U.S. government shutdown — should act as a headwind for further CHF appreciation.
                  Given this backdrop, CHF strength may be better expressed through selective crosses, particularly
                  against low-yielders such as the JPY or NZD.
                </p>
              </div>

              {/* CAD */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CAD</h3>
                <p className="text-gray-700 leading-relaxed">
                  The loonie is finding solid support from both rising short-end yields and improving market sentiment.
                  The rebound in crude oil prices adds an additional tailwind, with USOIL's recovery today likely to
                  reinforce bullish momentum for CAD pairs. As risk appetite continues to improve, the outlook for the
                  loonie remains constructive, particularly against the USD and JPY.
                </p>
              </div>

              {/* EUR */}
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EUR</h3>
                <p className="text-gray-700 leading-relaxed">
                  The euro appears poised for a gradual recovery this week, supported by stabilizing short-end yields
                  just above the 2.00% mark. The relative calm in European data releases should help underpin EUR sentiment,
                  with the rate differential backdrop also turning modestly supportive. For now, the pair remains in a
                  quiet consolidation phase, though improved stability across broader risk assets should continue to lend
                  mild support.
                </p>
              </div>
            </div>

            {/* Author Section */}
            <div className="p-12 bg-gray-50 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Author</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Ethan M</p>
                  <p className="text-gray-600">G10 Macro FX Strategist</p>
                  <p className="text-gray-600">ofob@cognitoupdates.co.uk</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Harry S</p>
                  <p className="text-gray-600">G10 Macro FX Strategist</p>
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
              <p className="text-gray-400 text-sm">Prepared by Cognito Macro Research | 11 Nov 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

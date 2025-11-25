import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { NewsletterSubscription } from '@/components/newsletter-subscription';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsletterSubscription />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/2821378.png" alt="Cognito" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Cognito
              </span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Institutional-grade macroeconomic intelligence, forecasts, and analysis for the world's leading decision-makers.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#data" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#intelligence-access" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="#institutional-access" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#reviews-section" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <div className="text-gray-400 text-sm">
                  <span className="block mb-2">Contact us on Discord:</span>
                  <div className="space-y-1">
                    <span className="block text-purple-400">@incognitoquant</span>
                    <span className="block text-purple-400">@ofob_</span>
                    <span className="block text-purple-400">@vosk6</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Cognito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

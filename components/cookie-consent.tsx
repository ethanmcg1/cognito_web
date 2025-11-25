'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            We use cookies to enhance your browsing experience, provide secure checkout, and analyze site traffic.
            By clicking "Accept", you consent to our use of cookies. Read our{' '}
            <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
              Privacy Policy
            </a>{' '}
            to learn more.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

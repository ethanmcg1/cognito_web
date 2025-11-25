'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, ExternalLink } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [discordLink, setDiscordLink] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setError('No payment information found');
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to verify payment');
        }

        setDiscordLink(data.discordInvite);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-32 bg-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-gray-400">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-32 bg-black">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-zinc-950 to-black border-red-500/50 p-8 text-center">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Payment Verification Failed</h1>
            <p className="text-gray-400 mb-6">{error}</p>
            <Button
              onClick={() => window.location.href = '/pricing'}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
            >
              Return to Pricing
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32 bg-black">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-gradient-to-br from-zinc-950 to-black border-green-500/50 p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to Cognito!
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Your subscription is now active. Join our Discord community to get started.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">
              Join Our Discord Server
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Access exclusive channels, get support, and connect with other members.
            </p>
            <Button
              onClick={() => window.open(discordLink, '_blank')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold w-full"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Discord Server
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">A confirmation email has been sent to your inbox.</p>
            <p>If you have any issues, please contact support.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-32 bg-black flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

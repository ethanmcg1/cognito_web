'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const trimmedEmail = email.toLowerCase().trim();

      // Submit to Supabase
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          {
            email: trimmedEmail,
            source: 'footer',
            status: 'active',
          }
        ])
        .select()
        .maybeSingle();

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        // Submit to external JotForm
        try {
          const formData = new FormData();
          formData.append('formID', '250163907124350');
          formData.append('q5_email5', trimmedEmail);

          await fetch('https://submit.jotform.com/submit/250163907124350', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
          });
        } catch (externalError) {
          // Don't fail the whole process if external submission fails
          console.error('External form submission error:', externalError);
        }

        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-16 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 rounded-2xl p-10 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
      <form onSubmit={handleSubscribe}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-purple-100 text-sm">Weekly FX analysis, trade ideas, and institutional insights delivered to your inbox.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-purple-200 focus:border-white/40 sm:w-80"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold whitespace-nowrap shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

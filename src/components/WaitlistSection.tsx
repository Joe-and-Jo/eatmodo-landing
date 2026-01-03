import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Extract username from email (part before @)
      const name = email.split('@')[0];

      console.log('Attempting to insert:', { email, name });

      // Insert into Supabase
      const { data, error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email, name }])
        .select();

      console.log('Supabase response:', { data, error: supabaseError });

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        // Handle duplicate email error
        if (supabaseError.code === '23505') {
          setError('This email is already on the waitlist!');
        } else {
          setError(`Error: ${supabaseError.message}`);
        }
        setLoading(false);
        return;
      }

      console.log('Successfully inserted:', data);
      setLoading(false);
      setSubmitted(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Caught error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="px-5 py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-[#f1ece6] to-[#faf7f3] bg-[rgb(250,247,243)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-[#2e2e2e] mb-3 text-3xl sm:text-4xl px-[20px] py-[0px]">
            Want early access?
          </h3>
          <p className="text-[#6f6f6f] text-lg px-[50px] py-[0px]">
            Join the waitlist—no commitment, just early access perks
          </p>
        </div>

        {submitted ? (
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-7 h-7 text-[#239939] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#2e2e2e] mb-1 text-lg">You're on the list!</p>
              <p className="text-[#6f6f6f]">We'll notify you when we launch.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:outline-none focus:border-[#2e2e2e] text-[#2e2e2e] placeholder:text-[#6f6f6f] shadow-sm text-lg"
              placeholder="your@email.com"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2e2e2e] text-white px-6 py-4 rounded-2xl hover:bg-[#4a4a4a] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}

        <div className="mt-8 pt-8 border-t border-[#e3ded8]">
          <p className="text-[#2e2e2e] mb-4 text-center">Early access includes:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-[#2e2e2e] mb-1 font-semibold">✓ Free premium</p>
              <p className="text-[#6f6f6f]">All features unlocked</p>
            </div>
            <div className="text-center">
              <p className="text-[#2e2e2e] mb-1 font-semibold">✓ Shape product</p>
              <p className="text-[#6f6f6f]">Your feedback matters</p>
            </div>
            <div className="text-center">
              <p className="text-[#2e2e2e] mb-1 font-semibold">✓ Launch offers</p>
              <p className="text-[#6f6f6f]">Exclusive discounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
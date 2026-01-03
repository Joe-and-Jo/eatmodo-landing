import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { supabase } from '../lib/supabase';

export function WaitlistForm() {
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
    <section id="waitlist" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653771925801-91e5d0ed1972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBlYXRpbmclMjBoYXBweXxlbnwxfHx8fDE3NjczMzk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="People enjoying food"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl text-orange-600">500+</div>
                      <div className="text-gray-700">On Waitlist</div>
                    </div>
                    <div>
                      <div className="text-2xl text-orange-600">Coming</div>
                      <div className="text-gray-700">Q1 2026</div>
                    </div>
                    <div>
                      <div className="text-2xl text-orange-600">Free</div>
                      <div className="text-gray-700">Beta Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
                Join the waitlist
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Be among the first to experience AI-powered food discovery in Indonesia. Get early access when we launch.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-green-900 mb-1">You're on the list!</h3>
                    <p className="text-green-700">
                      Thank you for joining. We'll notify you as soon as eatmodo launches.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      <p className="text-red-700">{error}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </button>

                  <p className="text-gray-500">
                    By joining, you agree to receive updates about eatmodo. We respect your privacy and won't spam you.
                  </p>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-gray-900 mb-4">Early access benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">First to try all premium features for free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Help shape the product with your feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Exclusive launch day offers and discounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, Search, ShoppingBag } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Just say what you feel',
    description: 'Type like you\'re texting a friend. "Pengen yang cozy buat ngobrol" or "Butuh yang affordable tapi enak"—we get it.',
    number: '01',
  },
  {
    icon: Search,
    title: 'We do the thinking',
    description: 'Our AI actually understands what you mean. No more endless scrolling through random lists that don\'t match your vibe.',
    number: '02',
  },
  {
    icon: ShoppingBag,
    title: 'Order instantly',
    description: 'Found the one? Tap and order through your go-to delivery app. Done.',
    number: '03',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Super simple to use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No complicated menus. Just chat and eat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-orange-600 text-white rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-5xl text-orange-100">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-orange-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
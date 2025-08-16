import React from 'react';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      icon: <Sparkles className="h-5 w-5" />,
      features: [
        "5 Interview per month",
        "Basic AI feedback",
        "Basic templates",
        "Watermark included",
        "Community support",
        "General questions"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For content creators",
      icon: <Zap className="h-5 w-5" />,
      features: [
        "50 Interview/mon",
        "Basic AI feedback",
        "Premium templates",
        "No watermark",
        "Priority support",
        "Custom branding",
        "Advanced AI features"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and agencies",
      icon: <Crown className="h-5 w-5" />,
      features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "White-label solution",
        "Advanced analytics"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading font-poppins mb-6">
            <span className="text-white">Simple</span>
            <br />
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-8 hover-lift card-dark relative ${
                plan.popular ? 'ring-2 ring-primary/50 glow-primary' : ''
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold glow-primary">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex p-3 rounded-lg bg-gradient-hero text-white mb-4 glow-primary">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-semibold font-poppins text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold font-poppins text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary hover-glow'
                    : 'btn-secondary'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 mt-2">
            Need a custom solution? <a href="#" className="text-primary hover:text-accent transition-colors">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
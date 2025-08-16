import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { 
      name: "Emily Thompson",
      role: "Product Manager at Meta",
      company: "Sarah creates",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The role-specific preparation was game-changing. I went from nervous wreck to confident candidate in just two weeks of practice",
      rating: 5
    },  
    { 
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The role-specific preparation was game-changing. I went from nervous wreck to confident candidate in just two weeks of practice.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      company: "Bloom Boutique",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "PrepNextAI completely transformed my interview confidence. The AI feedback was incredibly detailed and helped me land my dream role at Google.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "YouTuber",
      company: "@linkdin",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The quality of Interview PrepNextAI produces is mind-blowing. My Preparation are getting more productive than ever before.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      company: "BrandBoost Agency",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Getting a AI Powered Feedback based on my Interview, it is just Mind blowing. Now i can improve my field where iam lagging",
      rating: 5
    },
    {
      name: "Alex Rivera",
      role: "Entrepreneur",
      company: "StartupLife",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The ROI on PrepNextAI is incredible. I've saved thousands of time while increasing my Knowledge output by 10x.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading font-poppins mb-6">
            <span className="text-white">Loved by</span>
            <br />
            <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of content creators who are already creating viral videos with ShortlyAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover-lift card-dark"
            >
              <div className="inline-flex p-2 rounded-lg bg-gradient-hero text-white mb-4 glow-primary">
                <Quote className="h-4 w-4" />
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <p className="text-primary text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-primary mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Rating</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-secondary mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Users</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-accent mb-2">1k+</div>
            <div className="text-gray-400 text-sm">Interview</div>
          </div>
          <div className="glass-card rounded-lg p-6 hover-lift">
            <div className="text-2xl font-bold font-poppins text-green-400 mb-2">99%</div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
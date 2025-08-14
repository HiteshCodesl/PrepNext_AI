"use client"
import React from 'react';
import { 
  Brain, 
  MessageCircle, 
  BarChart3, 
  Cpu,
  Wand2,
  Clock,
  Target,
  Notebook,
  BookText,
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI analyzes your responses in real-time, providing instant feedback on content, delivery, and confidence.",
      color: "text-primary",
      glow: "glow-primary"
    },
    {
      icon: < MessageCircle className="h-6 w-6" />,
      title: "Interactive Practice",
      description: "Simulate real interviews with dynamic questioning that adapts to your industry and experience level.",
      color: "text-green-400",
      glow: "glow-secondary"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Insights",
      description: "Track your progress with detailed analytics and personalized improvement recommendations",
      color: "text-yellow-400",
      glow: "glow-accent"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Role-Specific Prep",
      description: "Customize your practice sessions for specific roles, companies, and interview formats.",
      color: "text-secondary",
      glow: "glow-secondary"
    },
    {
      icon: <BookText className="h-6 w-6" />,
      title: "Resume Analyser",
      description: "Analyse your resume with Ai Powered Engine",
      color: "text-accent",
      glow: "glow-accent"
    },
    {
      icon: <Notebook className="h-6 w-6" />,
      title: "Instant Feedback",
      description: "Get a Ai Powered Instant Feedback based on what you scored in a Resume",
      color: "text-orange-400",
      glow: "glow-primary"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge-dark mb-6">
            <Cpu className="h-4 w-4 text-secondary mr-2" />
            <span className="text-gray-300 text-sm font-medium">Powered by AI</span>
          </div>
          <h2 className="text-heading font-poppins mb-6">
            <span className="text-white">Advanced AI</span>
            <br />
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience cutting-edge AI technology that transforms your Interview process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover-lift card-dark"
            >
              <div className={`inline-flex p-3 rounded-lg bg-slate-800/50 ${feature.color} mb-4 ${feature.glow}`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold font-poppins text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 status-active rounded-full"></div>
                <span className="text-xs text-green-400 font-medium">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 glass-card rounded-xl p-8 glow-primary">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-poppins text-white mb-2">Performance Metrics</h3>
            <p className="text-gray-400">Real-time data from our AI infrastructure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-secondary mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">AI Uptime</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                <div className="h-full bg-secondary rounded-full glow-secondary" style={{ width: '99%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-primary mb-2">2.3s</div>
              <div className="text-gray-400 text-sm">Avg Render</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                <div className="h-full progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-accent mb-2">1024</div>
              <div className="text-gray-400 text-sm">GPU Cores</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                <div className="h-full bg-accent rounded-full glow-accent" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-poppins text-green-400 mb-2">47TB</div>
              <div className="text-gray-400 text-sm">Model Size</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                <div className="h-full bg-green-400 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
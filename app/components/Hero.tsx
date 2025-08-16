
import React from 'react';
import { ArrowRight, Brain, Bot,Eye, Wand2, BriefcaseBusiness, Book, BookCopy, Sheet, NotepadText, CodeXml } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">

          <div className="badge-dark my-4">
            <Brain className="h-4 w-4 text-primary mr-2" />
            <span className="text-gray-300 text-sm font-medium">AI Powered Engine</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-6xl font-poppins font-bold mb-6 leading-tight ">
            <div className="text-white mb-2">Ace Every Interview </div>
            <div className="text-gradient">with AI-Powered Precision</div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed">
             PrepNextAI helps you practice, analyze, and perfect your interview skills with <span className="text-primary font-semibold"> real-time AI feedback </span>tailored to your career goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href={"/dashboard"}>
            <button className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center hover-glow">
              <Bot className="mr-3 h-5 w-5" />
                Get Started
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
            </Link>

            <Link href={"/dashboard"}>
            <button className="btn-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center hover-glow">
              <NotepadText className="mr-3 h-5 w-5" />
                Analyse Resume
              <CodeXml className="ml-3 h-5 w-5" />
            </button>
            </Link>
            
          </div>

          <div className="relative max-w-6xl mx-auto animate-scale-in">
            <div className="glass-card rounded-2xl p-6 glow-primary">
              <div className="bg-black/30 rounded-xl p-6">

                <div className="flex items-center justify-between mb-6 p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center glow-primary">
                      <BriefcaseBusiness className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-semibold">PrepNextAI Studio</span>
                      <div className="text-green-400 text-xs flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                        Processing
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                    AI Active
                  </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="glass-card rounded-lg p-4 hover-lift">
                    <div className="flex items-center mb-3">
                      <Brain className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <span className="text-white font-medium text-sm">Script AI</span>
                        <div className="text-primary text-xs">GPT-4</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full progress-bar" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">Generating script...</p>
                  </div>

                  <div className="glass-card rounded-lg p-4 hover-lift">
                    <div className="flex items-center mb-3">
                      <Eye className="h-5 w-5 text-secondary mr-2" />
                      <div>
                        <span className="text-white font-medium text-sm">Visual AI</span>
                        <div className="text-secondary text-xs">Vision</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full glow-secondary" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">Creating visuals...</p>
                  </div>

                  <div className="glass-card rounded-lg p-4 hover-lift">
                    <div className="flex items-center mb-3">
                      <Wand2 className="h-5 w-5 text-accent mr-2" />
                      <div>
                        <span className="text-white font-medium text-sm">Render AI</span>
                        <div className="text-accent text-xs">Neural</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full glow-accent" style={{ width: '78%' }}></div>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">Final compilation...</p>
                  </div>
                </div>

             
              </div>
            </div>
          </div>


          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass-card rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold font-poppins text-primary mb-2">100+</div>
              <div className="text-gray-400 text-sm">Interviews Created</div>
            </div>
            
            <div className="text-center glass-card rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold font-poppins text-secondary mb-2">1K+</div>
              <div className="text-gray-400 text-sm">Students</div>
            </div>
            
            <div className="text-center glass-card rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold font-poppins text-accent mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            
            <div className="text-center glass-card rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold font-poppins text-white mb-2">2m</div>
              <div className="text-gray-400 text-sm">Avg Render</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
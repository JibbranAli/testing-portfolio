import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ExternalLink, MapPin, Mail, Phone, Zap, Code, Database } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Database, delay: 1 },
    { icon: Zap, delay: 2 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for Hire</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    Syed Jibbran Ali
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl text-gray-300 font-medium">
                    <span className="text-cyan-400">AI-Powered</span> DevOps Engineer
                  </p>
                  <p className="text-xl text-purple-400">
                    LangChain + Cloud Native Developer
                  </p>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  Transforming ideas into <span className="text-cyan-400">scalable solutions</span> through 
                  modern DevOps practices, AI integration, and <span className="text-purple-400">cloud-native technologies</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 flex items-center justify-center space-x-3 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-semibold">View Projects</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                
                <button className="relative border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-3 group">
                  <Download size={20} className="group-hover:animate-bounce" />
                  <span className="font-semibold">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                {[
                  { icon: MapPin, text: 'Mumbai, India' },
                  { icon: Mail, text: 'test@gmail.com' },
                  { icon: Phone, text: '1234567890' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-400 group">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <item.icon size={16} className="text-cyan-400" />
                    </div>
                    <span className="group-hover:text-cyan-400 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              {/* Floating Icons */}
              {floatingIcons.map((item, index) => (
                <div
                  key={index}
                  className="absolute z-20 text-cyan-400 animate-bounce"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${10 + index * 20}%`,
                    animationDelay: `${item.delay}s`,
                    animationDuration: '3s'
                  }}
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-xl">
                    <item.icon size={24} />
                  </div>
                </div>
              ))}

              <div className="relative z-10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/30 p-8 rounded-3xl shadow-2xl">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden group">
                      <span className="text-white text-4xl font-bold relative z-10">JA</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                    </div>
                    <p className="text-gray-400 font-medium">AI-Powered Developer</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex justify-center space-x-6">
                    {[
                      { href: "https://linkedin.com/in/jibbranali", label: "LinkedIn" },
                      { href: "https://github.com/JibbranAli", label: "GitHub" }
                    ].map((link, index) => (
                      <a 
                        key={index}
                        href={link.href} 
                        className="group relative p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-xl hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                      >
                        <ExternalLink size={20} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-3xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl transform -rotate-2 scale-110 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
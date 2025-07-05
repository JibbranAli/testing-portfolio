import React, { useEffect, useState } from 'react';
import { Award, Users, Code, Zap, Brain, Rocket, Shield, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Users size={24} />,
      title: '500+ Students',
      description: 'Mentored in DevOps & AI',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Code size={24} />,
      title: '3+ Years',
      description: 'Technical Training Experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap size={24} />,
      title: 'Live Bootcamps',
      description: 'Hands-on Learning Sessions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award size={24} />,
      title: 'Real Projects',
      description: 'Production-ready Deployments',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { name: 'Python', icon: <Brain size={16} /> },
    { name: 'Docker', icon: <Shield size={16} /> },
    { name: 'Kubernetes', icon: <Globe size={16} /> },
    { name: 'LangChain', icon: <Rocket size={16} /> },
    { name: 'Gemini AI', icon: <Zap size={16} /> },
    { name: 'DevOps', icon: <Code size={16} /> },
    { name: 'Cloud Native', icon: <Users size={16} /> },
    { name: 'Training', icon: <Award size={16} /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about bridging the gap between development and operations through 
              <span className="text-cyan-400"> modern tooling</span> and <span className="text-purple-400">AI integration</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Results-driven <span className="text-cyan-400 font-semibold">Technical Trainer</span> with 3+ years of hands-on experience in modern DevOps and AI toolchains. 
                  Proficient in <span className="text-purple-400">Python development</span>, cloud-native technologies like Docker and Kubernetes, 
                  and AI agent frameworks like <span className="text-cyan-400">LangChain with Gemini</span>.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in creating <span className="text-purple-400">scalable, automated solutions</span> that help organizations streamline their deployment processes 
                  while integrating cutting-edge AI capabilities to enhance <span className="text-cyan-400">productivity and innovation</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 text-cyan-400 px-4 py-3 rounded-xl text-sm font-medium hover:border-cyan-500/40 transition-all duration-300 flex items-center space-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
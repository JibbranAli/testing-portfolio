import React, { useEffect, useState } from 'react';
import { Code, Database, Cloud, Brain, Shield, Zap, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({ ...prev, [skill.name]: skill.level }));
                }, Math.random() * 1000);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: <Code size={24} />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'YAML', level: 88 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 88 },
        { name: 'Jenkins', level: 85 },
        { name: 'Google Cloud', level: 82 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'LangChain', level: 92 },
        { name: 'Gemini AI', level: 88 },
        { name: 'Streamlit', level: 85 },
        { name: 'AI Agents', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Shield size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub Actions', level: 88 },
        { name: 'Linux', level: 92 },
        { name: 'REST APIs', level: 85 }
      ]
    }
  ];

  const technologies = [
    { name: 'Python', icon: <Code size={16} />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Docker', icon: <Database size={16} />, color: 'from-blue-400 to-blue-600' },
    { name: 'Kubernetes', icon: <Globe size={16} />, color: 'from-blue-500 to-purple-600' },
    { name: 'Jenkins', icon: <Cpu size={16} />, color: 'from-gray-400 to-gray-600' },
    { name: 'Git', icon: <Shield size={16} />, color: 'from-orange-400 to-red-600' },
    { name: 'LangChain', icon: <Brain size={16} />, color: 'from-green-400 to-green-600' },
    { name: 'Gemini', icon: <Zap size={16} />, color: 'from-purple-400 to-purple-600' },
    { name: 'Streamlit', icon: <Code size={16} />, color: 'from-red-400 to-pink-600' },
    { name: 'Linux', icon: <Shield size={16} />, color: 'from-gray-500 to-black' },
    { name: 'Bash', icon: <Code size={16} />, color: 'from-green-500 to-green-700' },
    { name: 'Google Cloud', icon: <Cloud size={16} />, color: 'from-blue-400 to-blue-500' },
    { name: 'GitHub Actions', icon: <Cpu size={16} />, color: 'from-gray-600 to-black' },
    { name: 'REST APIs', icon: <Globe size={16} />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'YAML', icon: <Code size={16} />, color: 'from-purple-400 to-purple-500' },
    { name: 'DevOps', icon: <Shield size={16} />, color: 'from-orange-500 to-red-500' },
    { name: 'AI Agents', icon: <Brain size={16} />, color: 'from-pink-400 to-pink-600' },
    { name: 'Cloud Native', icon: <Cloud size={16} />, color: 'from-cyan-500 to-blue-500' },
    { name: 'CI/CD', icon: <Zap size={16} />, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for <span className="text-cyan-400">modern development</span>, 
              <span className="text-purple-400"> deployment</span>, and <span className="text-cyan-400">AI integration</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 font-medium group-hover/skill:text-cyan-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-bold text-lg">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full"></div>
                        <div 
                          className={`relative h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-2000 ease-out overflow-hidden`}
                          style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite] skew-x-12"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technologies I <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Master</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 p-4 rounded-xl hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`p-3 bg-gradient-to-r ${tech.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {tech.icon}
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
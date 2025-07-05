import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Code, Zap, BarChart3, Brain, Rocket, Database } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI Startup Co-Founder Agent',
      description: 'Multi-agent system using LangChain + Gemini for startup ideation to pitch deck generation. Complete end-to-end solution for entrepreneurs to validate and present their business ideas with advanced AI reasoning.',
      technologies: ['LangChain', 'Gemini AI', 'Python', 'Streamlit', 'Multi-Agent Systems', 'Vector DB'],
      icon: <Brain size={32} />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Automated idea validation with market analysis',
        'AI-powered pitch deck generation',
        'Business model recommendations',
        'Competitive landscape analysis',
        'Financial projections modeling',
        'Real-time collaboration features'
      ],
      github: 'https://github.com/JibbranAli',
      metrics: { users: '1K+', accuracy: '94%', time: '10x faster' }
    },
    {
      title: 'Docker Registry Dashboard',
      description: 'Advanced Streamlit dashboard to visualize and manage Docker images with real-time monitoring. Provides comprehensive insights into container registries with security scanning and optimization recommendations.',
      technologies: ['Streamlit', 'Docker', 'Python', 'REST APIs', 'Data Visualization', 'Redis'],
      icon: <Database size={32} />,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Real-time registry visualization',
        'Advanced image management',
        'Security vulnerability scanning',
        'Storage optimization analytics',
        'Automated cleanup policies',
        'Multi-registry support'
      ],
      github: 'https://github.com/JibbranAli',
      metrics: { images: '50K+', storage: '60% saved', scans: '99.9%' }
    },
    {
      title: 'QR Attendance System',
      description: 'Intelligent self-check-in attendance system via QR codes with Google Sheets integration. Features facial recognition, geolocation verification, and comprehensive analytics for educational and corporate environments.',
      technologies: ['Python', 'QR Code', 'Google Sheets API', 'Flask', 'Authentication', 'OpenCV'],
      icon: <Rocket size={32} />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Dynamic QR code generation',
        'Real-time attendance tracking',
        'Google Sheets synchronization',
        'Attendance analytics dashboard',
        'Geolocation verification',
        'Facial recognition integration'
      ],
      github: 'https://github.com/JibbranAli',
      metrics: { users: '5K+', accuracy: '99.8%', time: '5 sec avg' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {['</>', '{}', '[]', '()', '&&', '||', '=>', '!='][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions combining <span className="text-cyan-400">AI</span>, 
              <span className="text-purple-400"> DevOps</span>, and <span className="text-cyan-400">modern development practices</span>
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-500/40 transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ animationDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="flex items-center space-x-6">
                        <div className={`p-4 bg-gradient-to-r ${project.color} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                          <div className="text-white">
                            {project.icon}
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                          <Zap size={20} className="text-cyan-400" />
                          <span>Key Features</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-center space-x-3 group/feature"
                              style={{ animationDelay: `${featureIndex * 100}ms` }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                              <span className="text-gray-400 group-hover/feature:text-cyan-400 transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm font-medium hover:border-cyan-500/40 hover:scale-105 transition-all duration-300"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={project.github} 
                          className="group/btn relative bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
                        >
                          <Github size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
                          <span className="font-semibold">View Code</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                        </a>
                        <button className="group/btn relative border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden">
                          <ExternalLink size={20} className="group-hover/btn:scale-110 transition-transform duration-300" />
                          <span className="font-semibold">Live Demo</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>

                    {/* Project Visualization */}
                    <div className="relative">
                      <div className={`relative bg-gradient-to-br ${project.color} h-80 lg:h-96 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                        {/* Animated Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
                        
                        {/* Floating Elements */}
                        {hoveredProject === index && (
                          <div className="absolute inset-0">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                                style={{
                                  left: `${20 + (i % 4) * 20}%`,
                                  top: `${20 + Math.floor(i / 4) * 30}%`,
                                  animationDelay: `${i * 200}ms`,
                                  animationDuration: '2s'
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                        
                        <div className="text-center relative z-10">
                          <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                            {project.icon}
                          </div>
                          <p className="text-white/80 font-medium">Interactive Demo</p>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl transform rotate-3 scale-105 opacity-20 blur-xl group-hover:rotate-6 transition-transform duration-700`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl transform -rotate-2 scale-110 opacity-10 blur-2xl group-hover:-rotate-4 transition-transform duration-700`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
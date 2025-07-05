import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Users, Award, Briefcase, GraduationCap, Trophy, Zap } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Linux World Pvt. Ltd.',
      position: 'Technical Trainer & DevOps Specialist',
      duration: '2021 - Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      achievements: [
        'Mentored 500+ students in DevOps and AI technologies with 95% success rate',
        'Conducted 50+ live bootcamps on modern development practices',
        'Created 20+ real-world deployment projects for hands-on learning',
        'Developed comprehensive training curricula for cloud-native technologies',
        'Led workshops on LangChain and AI agent development',
        'Implemented automated CI/CD pipelines reducing deployment time by 70%'
      ],
      skills: ['Training', 'DevOps', 'AI', 'Cloud Technologies', 'Mentorship', 'Curriculum Development'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const education = [
    {
      degree: 'M.Tech - Computer Science',
      institution: 'D.Y. Patil University',
      location: 'Mumbai, India',
      year: '2021',
      grade: 'First Class with Distinction',
      description: 'Specialized in advanced computing concepts, software engineering practices, and AI/ML technologies',
      projects: [
        'Thesis on "AI-Powered DevOps Automation"',
        'Research in Cloud-Native Application Development',
        'Machine Learning for Predictive Analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      year: '2022',
      credentialId: 'RHCSA-2022-001',
      skills: ['Linux Administration', 'System Configuration', 'Security'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Red Hat Certified Engineer (RHCE)',
      issuer: 'Red Hat',
      year: '2022',
      credentialId: 'RHCE-2022-001',
      skills: ['Advanced Linux', 'Automation', 'Network Services'],
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'OpenShift Developer (DO288)',
      issuer: 'Red Hat',
      year: '2023',
      credentialId: 'DO288-2023-001',
      skills: ['Container Orchestration', 'Kubernetes', 'OpenShift'],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Trophy size={20} /> }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and academic achievements in <span className="text-cyan-400">technology</span> and <span className="text-purple-400">education</span>
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-2">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <div className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : ''}`}>
                      {tab.icon}
                    </div>
                    <span className="font-medium">{tab.label}</span>
                    {activeTab === tab.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[600px]">
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {experiences.map((exp, index) => (
                  <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 lg:p-12 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                            <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mt-2">
                              {exp.type}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                              <Calendar size={16} className="text-cyan-400" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                              <MapPin size={16} className="text-cyan-400" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex} 
                                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg text-sm font-medium hover:border-cyan-500/40 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                          <Zap size={20} className="text-cyan-400" />
                          <span>Key Achievements</span>
                        </h4>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div 
                              key={achIndex} 
                              className="group/achievement flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300"
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                              <span className="text-gray-300 group-hover/achievement:text-white transition-colors duration-300 leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {education.map((edu, index) => (
                  <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 lg:p-12 rounded-3xl hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02]">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-purple-400 font-semibold">{edu.institution}</p>
                          <div className="flex items-center space-x-4 mt-3">
                            <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                              {edu.year}
                            </span>
                            <span className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                              {edu.grade}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 text-gray-400">
                          <MapPin size={16} className="text-cyan-400" />
                          <span>{edu.location}</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                          <Award size={20} className="text-purple-400" />
                          <span>Key Projects</span>
                        </h4>
                        <div className="space-y-3">
                          {edu.projects.map((project, projectIndex) => (
                            <div 
                              key={projectIndex} 
                              className="group/project flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 group-hover/project:scale-150 transition-transform duration-300"></div>
                              <span className="text-gray-300 group-hover/project:text-white transition-colors duration-300">
                                {project}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-4 bg-gradient-to-r ${cert.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Trophy size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                              {cert.name}
                            </h3>
                            <p className="text-cyan-400 font-semibold">{cert.issuer}</p>
                            <p className="text-gray-400 text-sm">{cert.year}</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-4 rounded-xl">
                          <p className="text-gray-400 text-sm mb-2">Credential ID:</p>
                          <p className="text-cyan-400 font-mono text-sm">{cert.credentialId}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex} 
                                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium hover:border-cyan-500/40 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
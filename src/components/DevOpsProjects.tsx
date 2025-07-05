import React, { useEffect, useState } from 'react';
import { 
  Server, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  GitBranch, 
  Monitor,
  Code,
  Globe,
  BarChart3,
  Settings,
  Workflow,
  Terminal,
  Network,
  Lock,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const DevOpsProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
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

    const element = document.getElementById('devops-projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const devopsProjects = [
    {
      id: 1,
      title: 'Kubernetes Cluster Management Platform',
      description: 'Enterprise-grade Kubernetes cluster management with automated scaling, monitoring, and disaster recovery. Features advanced security policies, multi-cluster orchestration, and real-time performance analytics.',
      category: 'kubernetes',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'Istio'],
      icon: <Cloud size={32} />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cluster orchestration',
        'Automated scaling policies',
        'Advanced monitoring & alerting',
        'Security policy enforcement',
        'Disaster recovery automation',
        'Performance optimization'
      ],
      metrics: { clusters: '50+', uptime: '99.99%', nodes: '500+' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.devops-platform.com',
      status: 'production'
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      description: 'Comprehensive CI/CD pipeline with automated testing, security scanning, and deployment strategies. Supports multiple environments, rollback capabilities, and advanced deployment patterns.',
      category: 'cicd',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'SonarQube', 'ArgoCD', 'Terraform'],
      icon: <Workflow size={32} />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Multi-stage pipeline automation',
        'Automated security scanning',
        'Blue-green deployments',
        'Rollback mechanisms',
        'Environment management',
        'Performance testing integration'
      ],
      metrics: { deployments: '1000+', success: '99.5%', time: '5 min avg' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.cicd-platform.com',
      status: 'production'
    },
    {
      id: 3,
      title: 'Infrastructure as Code Platform',
      description: 'Terraform-based infrastructure management with automated provisioning, cost optimization, and compliance monitoring. Supports multi-cloud deployments and advanced resource management.',
      category: 'iac',
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Ansible', 'Packer'],
      icon: <Code size={32} />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Multi-cloud infrastructure',
        'Cost optimization algorithms',
        'Compliance automation',
        'Resource lifecycle management',
        'Automated provisioning',
        'Drift detection & remediation'
      ],
      metrics: { resources: '10K+', cost: '40% saved', regions: '15+' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.iac-platform.com',
      status: 'production'
    },
    {
      id: 4,
      title: 'DevOps Security & Compliance',
      description: 'Comprehensive security platform with automated vulnerability scanning, compliance monitoring, and threat detection. Integrates with existing DevOps workflows for seamless security integration.',
      category: 'security',
      technologies: ['SonarQube', 'Trivy', 'Falco', 'OPA', 'Vault', 'Secrets Manager'],
      icon: <Shield size={32} />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Automated vulnerability scanning',
        'Compliance monitoring',
        'Secrets management',
        'Threat detection & response',
        'Security policy enforcement',
        'Audit trail & reporting'
      ],
      metrics: { scans: '50K+', vulnerabilities: '0 critical', compliance: '100%' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.security-platform.com',
      status: 'production'
    },
    {
      id: 5,
      title: 'Monitoring & Observability Suite',
      description: 'Advanced monitoring platform with distributed tracing, log aggregation, and real-time alerting. Provides comprehensive visibility into application and infrastructure performance.',
      category: 'monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'AlertManager', 'Thanos'],
      icon: <Monitor size={32} />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Distributed tracing',
        'Real-time alerting',
        'Log aggregation & analysis',
        'Performance dashboards',
        'Anomaly detection',
        'Capacity planning'
      ],
      metrics: { metrics: '1M+', alerts: '99.9%', uptime: '99.99%' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.monitoring-platform.com',
      status: 'production'
    },
    {
      id: 6,
      title: 'Container Orchestration Platform',
      description: 'Enterprise container orchestration with advanced scheduling, networking, and storage management. Optimized for high availability and scalability across multiple environments.',
      category: 'containers',
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Calico', 'Longhorn', 'Harbor'],
      icon: <Server size={32} />,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Advanced container scheduling',
        'Service mesh integration',
        'Storage orchestration',
        'Network policy management',
        'Registry management',
        'Container security scanning'
      ],
      metrics: { containers: '10K+', images: '5K+', deployments: '500+' },
      github: 'https://github.com/JibbranAli',
      demo: 'https://demo.container-platform.com',
      status: 'production'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Globe size={20} /> },
    { id: 'kubernetes', name: 'Kubernetes', icon: <Cloud size={20} /> },
    { id: 'cicd', name: 'CI/CD', icon: <Workflow size={20} /> },
    { id: 'iac', name: 'Infrastructure', icon: <Code size={20} /> },
    { id: 'security', name: 'Security', icon: <Shield size={20} /> },
    { id: 'monitoring', name: 'Monitoring', icon: <Monitor size={20} /> },
    { id: 'containers', name: 'Containers', icon: <Server size={20} /> }
  ];

  const filteredProjects = activeTab === 'all' 
    ? devopsProjects 
    : devopsProjects.filter(project => project.category === activeTab);

  return (
    <section id="devops-projects" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating DevOps Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {['</>', '{}', '[]', '()', '&&', '||', '=>', '!=', 'k8s', 'docker', 'helm', 'git'][Math.floor(Math.random() * 12)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DevOps <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade DevOps solutions with <span className="text-blue-400">automation</span>, 
              <span className="text-green-400"> security</span>, and <span className="text-purple-400">scalability</span>
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl group-hover:scale-110 transition-transform duration-500`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center space-x-1">
                            <CheckCircle size={16} className="text-green-400" />
                            <span className="text-sm text-gray-400 capitalize">{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={key} className="text-center">
                        <div className="text-xl font-bold text-blue-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Zap size={18} className="text-blue-400" />
                      <span>Key Features</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center space-x-2 group/feature"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-green-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                          <span className="text-sm text-gray-400 group-hover/feature:text-blue-400 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium hover:border-blue-500/40 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-gray-800/50 text-gray-400 px-3 py-1 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={project.github} 
                      className="flex-1 group/btn relative bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
                    >
                      <GitBranch size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-sm">View Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex-1 group/btn relative bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-xl hover:from-blue-500 hover:to-green-500 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden"
                    >
                      <Globe size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-sm">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your DevOps?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's build scalable, secure, and efficient DevOps solutions together. 
                From CI/CD pipelines to Kubernetes orchestration, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-blue-500 hover:to-green-500 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </a>
                <a 
                  href="https://github.com/JibbranAli" 
                  className="bg-gray-800/50 text-white px-8 py-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 font-semibold border border-gray-700/50"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsProjects; 
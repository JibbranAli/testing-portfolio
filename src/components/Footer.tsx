import React from 'react';
import { Heart, ExternalLink, Zap, Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: "https://linkedin.com/in/jibbranali", 
      label: "LinkedIn",
      icon: <ExternalLink size={20} />,
      color: "hover:text-blue-400"
    },
    { 
      href: "https://github.com/JibbranAli", 
      label: "GitHub",
      icon: <Code size={20} />,
      color: "hover:text-purple-400"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: "Mumbai, India" },
    { icon: <Mail size={16} />, text: "test@gmail.com" },
    { icon: <Phone size={16} />, text: "1234567890" }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Zap className="text-cyan-400 w-8 h-8 animate-pulse" />
                  <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30 animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Syed Jibbran Ali
                </h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                <span className="text-cyan-400">AI-Powered DevOps Engineer</span> passionate about creating innovative solutions 
                that bridge the gap between development and operations through modern tooling and cutting-edge technology.
              </p>
              
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className={`group relative p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl ${link.color} transition-all duration-300 hover:border-cyan-500/40 hover:scale-110`}
                    aria-label={link.label}
                  >
                    <div className="relative z-10">
                      {link.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Code size={20} className="text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Mail size={20} className="text-cyan-400" />
                <span>Contact Info</span>
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-center space-x-3 text-gray-400">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <div className="text-cyan-400">
                        {info.icon}
                      </div>
                    </div>
                    <span className="group-hover:text-cyan-400 transition-colors duration-300">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="text-red-400 animate-pulse" size={16} />
                <span>by</span>
                <span className="text-cyan-400 font-semibold">Syed Jibbran Ali</span>
              </p>
              
              <div className="flex items-center space-x-6 text-gray-500 text-sm">
                <span>© {currentYear} All rights reserved.</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with enhanced animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'test@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '1234567890',
      description: 'Call for urgent matters',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Mumbai, India',
      description: 'Available for local meetings',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const services = [
    'DevOps consultation and implementation',
    'AI agent development and integration',
    'Technical training and workshops',
    'Cloud-native application development',
    'CI/CD pipeline optimization',
    'Container orchestration solutions'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how I can help bring your 
              <span className="text-cyan-400"> ideas to life</span> with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                  <MessageSquare className="text-cyan-400" size={32} />
                  <span>Contact Information</span>
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-cyan-400 font-medium">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span>Let's Work Together</span>
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. Whether you need:
                </p>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center space-x-3"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                  <Send className="text-purple-400" size={32} />
                  <span>Send a Message</span>
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="relative">
                      <CheckCircle className="text-green-400 mx-auto animate-bounce" size={64} />
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <div className="flex justify-center space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 200}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3 flex items-center space-x-2">
                        <User size={16} className="text-cyan-400" />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-cyan-500/30"
                        placeholder="Your Full Name"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3 flex items-center space-x-2">
                        <AtSign size={16} className="text-cyan-400" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-cyan-500/30"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3 flex items-center space-x-2">
                        <MessageSquare size={16} className="text-cyan-400" />
                        <span>Message</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 text-white placeholder-gray-500 resize-none group-hover:border-cyan-500/30"
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <div className="relative z-10 flex items-center space-x-3">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            <span className="font-semibold">Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-semibold">Send Message</span>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
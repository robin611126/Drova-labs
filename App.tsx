import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Instagram, Twitter, Linkedin, CheckCircle, Play, 
  BarChart, Users, Lock, ChevronRight, Zap, Globe, Clock, Sparkles, 
  TrendingUp, Video, Layers, Award, Mail, Phone, MapPin, Search, ChevronDown
} from 'lucide-react';
import * as FramerMotion from 'framer-motion';

const { motion, AnimatePresence } = FramerMotion;

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Sparkles className="text-brand-purple" size={24} />
            <Link to="/" className="text-2xl font-bold font-display tracking-tighter text-white">
              Drova<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-accent">Labs</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-brand-purple ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-purpleDark hover:from-brand-accent hover:to-brand-purple text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-3 py-3 text-center rounded-lg bg-brand-purple text-white font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#020203] border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="text-brand-purple" size={20} />
            <span className="text-2xl font-bold font-display">DrovaLabs</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            AI-Powered Advertising Excellence. We help businesses scale 10x with next-generation content creation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all text-gray-400"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all text-gray-400"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all text-gray-400"><Linkedin size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 font-display">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-brand-purple transition-colors">UGC Ads</Link></li>
            <li><Link to="/services" className="hover:text-brand-purple transition-colors">Brand Commercials</Link></li>
            <li><Link to="/services" className="hover:text-brand-purple transition-colors">Personal Branding</Link></li>
            <li><Link to="/services" className="hover:text-brand-purple transition-colors">Custom AI Solutions</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 font-display">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-brand-purple transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-purple transition-colors">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-brand-purple transition-colors">Blog</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-purple transition-colors">Pricing</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 font-display">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3"><Mail size={16} className="text-brand-purple"/> hello@drovalabs.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-brand-purple"/> +91 98765 43210</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-brand-purple"/> Mumbai, India</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Drova Labs. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const SectionHeading = ({ children, subtitle, centered = true }: { children: React.ReactNode; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="inline-block py-1 px-3 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-bold text-brand-purple mb-4 uppercase tracking-wider">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
      {children}
    </h2>
    <div className={`h-1 w-20 bg-gradient-to-r from-brand-purple to-transparent rounded-full ${centered ? 'mx-auto' : ''}`} />
  </div>
);

// --- Home Page Sections ---

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-brand-purple/10 to-transparent z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-accent mb-8 backdrop-blur-md">
            <Zap size={14} fill="currentColor" />
            <span>AI-Powered Advertising Revolution</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-heading leading-[1.1]">
            Transform Your Business <br/>
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-violet-400 to-brand-accent text-glow">AI-Powered Ads</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-10 leading-relaxed">
            Get 10x Sales & ROI with next-gen video content. We build high-converting UGC, Cinematic Commercials, and AI Avatars tailored to scale your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-purple hover:bg-brand-purpleDark text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group">
              Start Your Campaign <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-brand-purple/50 text-white hover:bg-white/5 rounded-lg font-bold transition-all flex items-center justify-center">
              View Portfolio
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
             {[
               { label: "Average ROI", value: "10X" },
               { label: "Campaigns Delivered", value: "500+" },
               { label: "Views Generated", value: "2M+" },
               { label: "Client Satisfaction", value: "98%" }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 + (i * 0.1) }}
                 className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-brand-purple/30 transition-colors"
               >
                 <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-display">{stat.value}</div>
                 <div className="text-xs text-brand-text uppercase tracking-wider">{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickNav = () => (
  <div className="border-y border-white/5 bg-[#08080A] py-4 overflow-x-auto hide-scrollbar sticky top-20 z-40">
    <div className="max-w-7xl mx-auto px-4 flex justify-center min-w-max space-x-8">
      {['Services', 'Showcase', 'Process', 'Pricing', 'Testimonials'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-500 hover:text-brand-purple transition-colors">
          {item}
        </a>
      ))}
    </div>
  </div>
);

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Portfolio Preview">See the Magic in Action</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-brand-card box-glow transition-all"
            >
              <img 
                src={`https://picsum.photos/400/700?random=${item + 20}`} 
                alt="Showcase" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                 <span className="px-3 py-1 text-xs font-bold bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10">
                   {item === 1 ? 'UGC Ad' : item === 2 ? 'Commercial' : 'Avatar'}
                 </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <div className="w-16 h-16 rounded-full bg-brand-purple/90 backdrop-blur text-white flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.6)]">
                  <Play fill="currentColor" className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <div className="flex justify-between items-end">
                   <div>
                     <h3 className="font-bold text-lg text-white">Campaign Alpha</h3>
                     <p className="text-sm text-gray-400">Tech Industry</p>
                   </div>
                   <div className="text-right">
                     <div className="text-brand-accent font-bold">4.2% CTR</div>
                     <div className="text-xs text-gray-500">Result</div>
                   </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white hover:text-brand-purple font-medium border-b border-transparent hover:border-brand-purple transition-all pb-1">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Problems = () => {
  const problems = [
    { 
      problem: "High Production Costs", 
      solution: "AI-Powered Efficiency", 
      icon: <TrendingUp size={24} className="text-red-400" />,
      solvedIcon: <TrendingUp size={24} className="text-brand-accent" /> 
    },
    { 
      problem: "Slow Turnaround Times", 
      solution: "24-48 Hour Delivery", 
      icon: <Clock size={24} className="text-red-400" />,
      solvedIcon: <Zap size={24} className="text-brand-accent" /> 
    },
    { 
      problem: "Low Ad Performance", 
      solution: "Data-Driven Creative", 
      icon: <BarChart size={24} className="text-red-400" />,
      solvedIcon: <BarChart size={24} className="text-brand-accent" /> 
    },
    { 
      problem: "Generic Content", 
      solution: "Hyper-Personalized", 
      icon: <Layers size={24} className="text-red-400" />,
      solvedIcon: <Users size={24} className="text-brand-accent" /> 
    },
    { 
      problem: "Limited Scalability", 
      solution: "Unlimited Variations", 
      icon: <Lock size={24} className="text-red-400" />,
      solvedIcon: <Globe size={24} className="text-brand-accent" /> 
    },
    { 
      problem: "Poor ROI", 
      solution: "Proven 10X Framework", 
      icon: <Award size={24} className="text-red-400" />,
      solvedIcon: <Award size={24} className="text-brand-accent" /> 
    }
  ];

  return (
    <section className="py-24 bg-brand-card/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading subtitle="The Problem" centered>Your Challenges, Solved</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#0F0F11] border border-white/5 hover:border-brand-purple/30 transition-all group">
               <div className="flex items-start justify-between mb-6">
                 <div className="p-3 rounded-lg bg-white/5 text-gray-400 group-hover:bg-red-500/10 group-hover:text-red-400 transition-colors">
                   {p.icon}
                 </div>
                 <ArrowRight className="text-gray-600" size={20} />
                 <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                   {p.solvedIcon}
                 </div>
               </div>
               <div className="space-y-2">
                 <p className="text-gray-500 line-through text-sm">{p.problem}</p>
                 <h4 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">{p.solution}</h4>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, price, icon: Icon, features, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-[#0F0F11] border border-white/5 rounded-3xl p-8 hover:border-brand-purple/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[50px] rounded-full group-hover:bg-brand-purple/20 transition-all"></div>
    
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 flex items-center justify-center mb-6 text-brand-purple border border-brand-purple/20">
      <Icon size={28} />
    </div>
    
    <h3 className="text-2xl font-bold font-display text-white mb-2">{title}</h3>
    <div className="text-brand-text mb-6 text-sm">Starting at <span className="text-2xl font-bold text-brand-accent block mt-1">{price}</span></div>
    
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
          <CheckCircle size={16} className="text-brand-purple shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>
    
    <Link to="/contact" className="block w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-center font-bold border border-white/10 transition-all group-hover:border-brand-purple/50 group-hover:text-brand-purple">
      Learn More
    </Link>
  </motion.div>
);

const HomeServices = () => (
  <section id="services" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="What We Do">Our AI-Powered Arsenal</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard 
          title="UGC / Avatar Ads"
          price="₹1,999"
          icon={Users}
          delay={0}
          features={["30-45 sec duration", "Scriptwriting included", "Viral Hooks", "Mobile-first vertical format"]}
        />
        <ServiceCard 
          title="Brand Commercials"
          price="₹4,599"
          icon={Video}
          delay={0.1}
          features={["30-50 sec cinematic", "Full Storyboard", "Pro Voiceover & SFX", "Infinite creativity"]}
        />
        <ServiceCard 
          title="Personal Branding"
          price="₹30,000"
          icon={Sparkles}
          delay={0.2}
          features={["20 Videos Package", "Ultra Realistic Clone", "Content Strategy", "1-2 mins per video"]}
        />
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 bg-brand-card border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="How It Works" centered>From Concept to Conversion</SectionHeading>
      
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent hidden md:block -translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {[
            { step: "01", title: "Brief & Strategy", desc: "Share your goals and target audience." },
            { step: "02", title: "AI Creation", desc: "Our AI generates multiple variations." },
            { step: "03", title: "Optimize & Launch", desc: "Refine, test, and scale winning ads." }
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-[#080809] md:bg-transparent p-6 rounded-2xl md:p-0 border border-white/5 md:border-0"
            >
              <div className="w-16 h-16 mx-auto bg-brand-card border border-brand-purple/30 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_15px_rgba(124,58,237,0.3)] relative z-10">
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading subtitle="Success Stories" centered={false}>Trusted by Growing Brands</SectionHeading>
          <p className="text-lg text-gray-400 mb-8">
            Don't just take our word for it. See what founders and marketing directors have to say about our AI-driven approach.
          </p>
          <div className="flex gap-4">
             <div className="bg-brand-card p-6 rounded-2xl border border-white/10 w-full">
               <div className="flex text-yellow-500 mb-4">
                 {[1,2,3,4,5].map(s => <Sparkles key={s} size={16} fill="currentColor" />)}
               </div>
               <p className="text-gray-300 italic mb-6">"Drova Labs cut our ad production costs by 70% while doubling our CTR. The AI avatars are indistinguishable from real actors."</p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                 <div>
                   <h4 className="font-bold text-white">Sarah Jenkins</h4>
                   <p className="text-xs text-gray-500">CMO, TechFlow</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="space-y-4 translate-y-8">
              <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-white/5 opacity-50"><div className="h-4 w-20 bg-white/10 rounded mb-2"></div><div className="h-2 w-full bg-white/5 rounded"></div></div>
              <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-white/5"><h4 className="font-bold mb-1">200%</h4><p className="text-xs text-gray-500">Engagement Increase</p></div>
           </div>
           <div className="space-y-4">
              <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-white/5"><h4 className="font-bold mb-1">3x</h4><p className="text-xs text-gray-500">Faster Delivery</p></div>
              <div className="bg-[#1A1A1D] p-6 rounded-2xl border border-white/5 opacity-50"><div className="h-4 w-20 bg-white/10 rounded mb-2"></div><div className="h-2 w-full bg-white/5 rounded"></div></div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-brand-purpleDark to-[#2e1065] p-12 md:p-24 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/30 rounded-full blur-[80px]"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">Ready to 10X Your Sales?</h2>
        <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">Join 500+ businesses scaling with AI-powered ads. No contracts, fast delivery.</p>
        <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-purpleDark rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          Get Your First Ad <ArrowRight size={20} />
        </Link>
        <div className="mt-8 flex justify-center gap-6 text-sm text-purple-200/60 font-medium">
          <span>No contracts</span> • <span>Money-back guarantee</span> • <span>Fast delivery</span>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <QuickNav />
    <Showcase />
    <Problems />
    <HomeServices />
    <Process />
    <Testimonials />
    <FinalCTA />
  </div>
);

// --- Inner Pages ---

const PageHeader = ({ title, subtitle }) => (
  <div className="pt-32 pb-16 px-4 text-center bg-brand-dark relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-purple/5 to-transparent pointer-events-none"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">{title}</h1>
      <p className="text-xl text-brand-text max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </div>
);

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'UGC Ads', 'Commercials', 'Branding'];
  
  return (
    <div className="min-h-screen">
      <PageHeader title="Our Work Speaks Louder" subtitle="Explore our recent AI-generated campaigns delivering massive ROI." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                filter === f 
                  ? 'bg-brand-purple border-brand-purple text-white' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group rounded-2xl bg-brand-card border border-white/5 overflow-hidden hover:border-brand-purple/40 transition-all">
               <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                 <img src={`https://picsum.photos/600/400?random=${item + 30}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Work" />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                   <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-full text-white font-bold border border-white/20">View Case Study</div>
                 </div>
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">UGC Ad</span>
                    <div className="flex items-center gap-1 text-green-400 text-xs font-bold"><TrendingUp size={12}/> 300% ROI</div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-1">Fitness App Launch</h3>
                 <p className="text-sm text-gray-500">Generated 50k+ downloads via Reels.</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Invest in Growth" subtitle="Simple pricing. No hidden fees. Just results." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {/* Tier 1 */}
           <div className="bg-[#0F0F11] border border-white/10 rounded-3xl p-8 hover:border-brand-purple/50 transition-all relative">
             <h3 className="text-xl font-bold text-gray-300 mb-2">UGC Ads</h3>
             <div className="flex items-baseline gap-1 mb-6">
               <span className="text-4xl font-bold text-white">₹1,999</span>
               <span className="text-gray-500">/video</span>
             </div>
             <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-white/5">Perfect for testing creatives on Meta & TikTok.</p>
             <ul className="space-y-4 mb-8">
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> 30-45 Sec Duration</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> AI Avatar Presenter</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> Scriptwriting Included</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> HD Vertical Format</li>
             </ul>
             <Link to="/contact" className="block w-full py-3 text-center bg-white/10 text-white font-bold rounded-xl hover:bg-brand-purple transition-colors">Get Started</Link>
           </div>
           
           {/* Tier 2 */}
           <div className="bg-[#1A1A1D] border border-brand-purple rounded-3xl p-8 relative shadow-[0_0_40px_rgba(124,58,237,0.15)] scale-105 z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
             <h3 className="text-xl font-bold text-white mb-2">Brand Commercials</h3>
             <div className="flex items-baseline gap-1 mb-6">
               <span className="text-4xl font-bold text-white">₹4,599</span>
               <span className="text-gray-500">/video</span>
             </div>
             <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-white/5">Cinematic quality for high-ticket offers.</p>
             <ul className="space-y-4 mb-8">
               <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-accent"/> Everything in UGC</li>
               <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-accent"/> Full Storyboard</li>
               <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-accent"/> Cinematic Visuals</li>
               <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-accent"/> Pro Voiceover & SFX</li>
             </ul>
             <Link to="/contact" className="block w-full py-3 text-center bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purpleDark transition-colors shadow-lg shadow-brand-purple/25">Get Started</Link>
           </div>
           
           {/* Tier 3 */}
           <div className="bg-[#0F0F11] border border-white/10 rounded-3xl p-8 hover:border-brand-purple/50 transition-all">
             <h3 className="text-xl font-bold text-gray-300 mb-2">Personal Branding</h3>
             <div className="flex items-baseline gap-1 mb-6">
               <span className="text-4xl font-bold text-white">₹30,000</span>
               <span className="text-gray-500">/package</span>
             </div>
             <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-white/5">Dominate social media with your AI Twin.</p>
             <ul className="space-y-4 mb-8">
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> 20 Videos / Month</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> Custom AI Clone</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> Content Strategy</li>
               <li className="flex gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-brand-purple"/> Multi-platform Resize</li>
             </ul>
             <Link to="/contact" className="block w-full py-3 text-center bg-white/10 text-white font-bold rounded-xl hover:bg-brand-purple transition-colors">Get Started</Link>
           </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-brand-card border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">Do you offer refunds?</h4>
              <p className="text-gray-400 text-sm">Yes, we have a satisfaction guarantee. If the initial draft doesn't match the agreed concept, we revise it until it does.</p>
            </div>
            <div className="bg-brand-card border border-white/5 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">How long does delivery take?</h4>
              <p className="text-gray-400 text-sm">Standard delivery is 48-72 hours. Rush delivery (24 hours) is available for an additional fee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => (
  <div className="min-h-screen">
     <PageHeader title="Services Designed to Scale" subtitle="Comprehensive AI marketing solutions." />
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        
        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center text-brand-purple mb-6"><Users size={32}/></div>
            <h2 className="text-3xl font-bold font-display mb-4">UGC & Avatar Ads</h2>
            <p className="text-gray-400 mb-6 text-lg">Stop worrying about filming. We create high-converting UGC-style ads using ultra-realistic AI avatars that look and sound just like real creators.</p>
            <ul className="space-y-3 mb-8">
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-purple" size={20}/> Native social media look</li>
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-purple" size={20}/> Perfect for Meta & TikTok</li>
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-purple" size={20}/> Includes script & viral hooks</li>
            </ul>
            <div className="text-2xl font-bold text-brand-accent mb-6">Starts at ₹1,999</div>
            <Link to="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200">Order Now</Link>
          </div>
          <div className="bg-brand-card aspect-square rounded-3xl border border-white/10 relative overflow-hidden">
             {/* Placeholder for Service Image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent"></div>
             <img src="https://picsum.photos/600/600?random=1" className="w-full h-full object-cover opacity-60 mix-blend-screen" alt="UGC" />
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent mb-6"><Video size={32}/></div>
            <h2 className="text-3xl font-bold font-display mb-4">Cinematic Brand Commercials</h2>
            <p className="text-gray-400 mb-6 text-lg">TV-quality commercials at a fraction of the cost. Using generative video AI, we build stunning visual narratives that elevate your brand perception.</p>
             <ul className="space-y-3 mb-8">
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-accent" size={20}/> Full storyboard development</li>
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-accent" size={20}/> Custom sound design</li>
               <li className="flex gap-3 text-gray-300"><CheckCircle className="text-brand-accent" size={20}/> 4K resolution output</li>
            </ul>
            <div className="text-2xl font-bold text-brand-accent mb-6">Starts at ₹4,599</div>
            <Link to="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200">Order Now</Link>
          </div>
          <div className="md:order-1 bg-brand-card aspect-square rounded-3xl border border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent"></div>
             <img src="https://picsum.photos/600/600?random=2" className="w-full h-full object-cover opacity-60 mix-blend-screen" alt="Commercial" />
          </div>
        </div>

     </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen">
    <PageHeader title="We are Drova Labs" subtitle="Pioneering the future of generative advertising." />
    <div className="max-w-4xl mx-auto px-4 pb-24 text-center">
      <div className="mb-16">
         <p className="text-xl text-gray-300 leading-relaxed">
           Founded by a team of creative technologists and marketers, Drova Labs was born from a simple observation: <span className="text-white font-bold">Traditional video production is too slow and expensive for the modern speed of business.</span>
         </p>
         <br/>
         <p className="text-xl text-gray-300 leading-relaxed">
           We leverage cutting-edge AI models to generate studio-quality content in hours, not months. Our mission is to democratize high-end advertising for businesses of all sizes.
         </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="p-6 bg-brand-card rounded-2xl border border-white/5">
           <h3 className="text-3xl font-bold text-white mb-2">2023</h3>
           <p className="text-xs text-gray-500 uppercase">Founded</p>
        </div>
        <div className="p-6 bg-brand-card rounded-2xl border border-white/5">
           <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
           <p className="text-xs text-gray-500 uppercase">Clients</p>
        </div>
        <div className="p-6 bg-brand-card rounded-2xl border border-white/5">
           <h3 className="text-3xl font-bold text-white mb-2">12</h3>
           <p className="text-xs text-gray-500 uppercase">Team Members</p>
        </div>
        <div className="p-6 bg-brand-card rounded-2xl border border-white/5">
           <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
           <p className="text-xs text-gray-500 uppercase">AI Operation</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="min-h-screen">
    <PageHeader title="Insights" subtitle="Trends in AI, Marketing, and Growth." />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1,2,3,4,5,6].map(i => (
          <article key={i} className="flex flex-col bg-brand-card border border-white/5 rounded-2xl overflow-hidden hover:border-brand-purple/30 transition-all group">
             <div className="aspect-[16/10] bg-zinc-800 overflow-hidden">
               <img src={`https://picsum.photos/600/400?random=${i+50}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" />
             </div>
             <div className="p-6 flex-1 flex flex-col">
               <div className="text-xs font-bold text-brand-purple mb-3 uppercase tracking-wider">AI Strategy</div>
               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">How Generative Video is Changing Ads Forever</h3>
               <p className="text-gray-400 text-sm mb-6 flex-1">Explore the shift from traditional filming to prompt-based creation and what it means for ROI.</p>
               <a href="#" className="text-white text-sm font-bold border-b border-brand-purple pb-1 w-max">Read Article</a>
             </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen">
    <PageHeader title="Let's Scale Your Business" subtitle="Ready for 10x ROI? Get in touch." />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-brand-card border border-white/10 rounded-full flex items-center justify-center text-brand-purple"><Mail size={20}/></div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Email</div>
                <div className="font-medium">hello@drovalabs.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-brand-card border border-white/10 rounded-full flex items-center justify-center text-brand-purple"><Phone size={20}/></div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Phone</div>
                <div className="font-medium">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-brand-card border border-white/10 rounded-full flex items-center justify-center text-brand-purple"><MapPin size={20}/></div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Location</div>
                <div className="font-medium">Mumbai, India</div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-brand-card border border-white/5 rounded-2xl">
             <h3 className="text-xl font-bold mb-4">Why choose us?</h3>
             <ul className="space-y-3">
               <li className="flex gap-3 text-sm text-gray-400"><CheckCircle size={16} className="text-green-400"/> 24-48 Hour Turnaround</li>
               <li className="flex gap-3 text-sm text-gray-400"><CheckCircle size={16} className="text-green-400"/> 100% Satisfaction Guarantee</li>
               <li className="flex gap-3 text-sm text-gray-400"><CheckCircle size={16} className="text-green-400"/> Dedicated Account Manager</li>
             </ul>
          </div>
        </div>
        
        <div className="bg-[#0F0F11] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="john@company.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Service</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all appearance-none">
                <option>UGC Ads (₹1,999)</option>
                <option>Brand Commercials (₹4,599)</option>
                <option>Personal Branding (₹30,000)</option>
                <option>Other / Custom</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Tell us about your project goals..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-purple to-brand-purpleDark text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Admin Section (Simplified for Demo) ---
const AdminPage = () => (
  <div className="pt-32 px-4 text-center">
    <h1 className="text-2xl font-bold">Admin Portal</h1>
    <p className="text-gray-500">Restricted Access</p>
  </div>
);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-purple selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
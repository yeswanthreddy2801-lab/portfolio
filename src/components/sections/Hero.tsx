import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect logic
  useEffect(() => {
    const role = portfolioData.personal.role[currentRoleIndex];
    
    if (isTyping) {
      if (displayedRole !== role) {
        const timeout = setTimeout(() => {
          setDisplayedRole(role.slice(0, displayedRole.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedRole === '') {
        setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.personal.role.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedRole(role.slice(0, displayedRole.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedRole, isTyping, currentRoleIndex]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[60%] flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-green-500/30 bg-green-500/5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for Opportunities 🚀</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-2">Hi, I'm</h1>
              <h1 className="text-5xl md:text-7xl font-bold mb-2">Gorusu Yeswanth</h1>
              <h1 className="text-6xl md:text-8xl font-extrabold text-gradient">Reddy</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="h-10 mb-6 flex items-center"
            >
              <p className="text-xl md:text-3xl font-mono text-gray-700 dark:text-gray-300">
                {displayedRole}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Building scalable Full Stack applications, AI-powered products, 
              and solving complex problems through elegant software engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 font-medium transition-colors"
                download
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Let's Talk
                <MessageSquare className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-gray-200 dark:border-white/10 w-full"
            >
              <div>
                <h4 className="text-3xl font-bold font-mono text-gradient mb-1">
                  {useCountUp(600, 2000)}+
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Problems<br/>Solved</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-mono text-gradient mb-1">
                  {useCountUp(4, 1000)}+
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Projects<br/>Built</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-mono text-gradient mb-1">
                  9.34
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">CGPA<br/>/ 10</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold font-mono text-gradient mb-1">
                  {useCountUp(1, 500)}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Internship<br/>Experience</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Abstract 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
            className="w-full lg:w-[40%] h-[400px] md:h-[500px] relative flex items-center justify-center hidden md:flex"
          >
            <motion.div 
              className="relative w-full h-full animate-float"
            >
              {/* Central glowing core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-3xl rounded-full mix-blend-screen" />
              
              {/* Mock Code Editor */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 glass-card rounded-2xl p-4 shadow-2xl z-20 border-white/20"
                style={{ rotateX: 15, rotateY: -15, transformPerspective: 1000 }}
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-xs text-blue-300 mb-2">
                  <span className="text-purple-400">const</span> developer = {'{'}
                </div>
                <div className="font-mono text-xs text-blue-300 mb-2 ml-4">
                  name: <span className="text-green-300">'Gorusu Yeswanth'</span>,
                </div>
                <div className="font-mono text-xs text-blue-300 mb-2 ml-4">
                  skills: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>, <span className="text-green-300">'AI'</span>],
                </div>
                <div className="font-mono text-xs text-blue-300 mb-2 ml-4">
                  passionate: <span className="text-yellow-300">true</span>
                </div>
                <div className="font-mono text-xs text-blue-300 mb-2">
                  {'}'};
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-12 h-12 glass rounded-xl flex items-center justify-center font-bold text-blue-400 text-xs shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                React
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-16 h-16 glass rounded-full flex items-center justify-center font-bold text-green-400 text-xs shadow-lg z-30"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                Node.js
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 right-1/3 w-10 h-10 glass rounded-lg flex items-center justify-center font-bold text-yellow-400 text-xs shadow-lg z-10"
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                Python
              </motion.div>

              <motion.div 
                className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center font-bold text-white text-xs shadow-xl z-30"
                animate={{ x: [0, -15, 0], y: [0, -15, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                AI
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

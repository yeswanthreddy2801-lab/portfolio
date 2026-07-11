import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Trophy } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function About() {
  const interests = [
    { label: "Full Stack Dev", icon: "🔧" },
    { label: "AI & ML", icon: "🤖" },
    { label: "System Design", icon: "🏗️" },
    { label: "Problem Solving", icon: "🧠" },
    { label: "Backend Engineering", icon: "⚡" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT: Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform -rotate-6 scale-105 blur-lg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-3 opacity-50" />
              <div className="absolute inset-0 glass-card rounded-3xl flex items-center justify-center border-white/20 overflow-hidden group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                
                {/* Decorative Rings */}
                <div className="absolute w-[150%] h-[150%] border border-white/10 rounded-full animate-pulse-slow" />
                <div className="absolute w-[120%] h-[120%] border border-white/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
                
                <h2 className="text-8xl font-bold font-heading text-white/50 tracking-tighter z-20 group-hover:scale-110 transition-transform duration-500">
                  {portfolioData.personal.initials}
                </h2>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Passionate about building things that matter
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              {portfolioData.personal.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Interest Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                >
                  <span>{interest.icon}</span>
                  <span>{interest.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Fun Facts Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <MapPin className="w-5 h-5 text-primary mb-1" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Location</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Visakhapatnam, India</span>
              </div>
              <div className="flex flex-col gap-1">
                <GraduationCap className="w-5 h-5 text-secondary mb-1" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Education</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">IT Engineering Student</span>
              </div>
              <div className="flex flex-col gap-1">
                <Code className="w-5 h-5 text-accent mb-1" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Projects</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">4+ Built</span>
              </div>
              <div className="flex flex-col gap-1">
                <Trophy className="w-5 h-5 text-yellow-500 mb-1" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Problem Solving</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">600+ LeetCode</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

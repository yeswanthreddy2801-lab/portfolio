import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Github } from '../shared/icons';
import { portfolioData } from '../../data/portfolio';

// 3D Tilt Card Component
function TiltCard({ project, index, isFlagship = false }: { project: any, index: number, isFlagship?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      onMouseLeave={isDesktop ? handleMouseLeave : undefined}
      style={{
        rotateX: isDesktop ? rotateX : 0,
        rotateY: isDesktop ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative w-full ${isFlagship ? 'lg:col-span-2' : ''}`}
    >
      <div 
        className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col group relative border-t-4 border-transparent hover:shadow-2xl transition-all duration-300 transform-gpu`}
      >
        {/* Animated Gradient Top Border via pseudo-element */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
        
        {/* Mock Browser Header */}
        <div className="bg-gray-100/50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-4 flex-1 text-xs text-center font-mono text-gray-500 opacity-50 overflow-hidden text-ellipsis whitespace-nowrap">
            {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app
          </div>
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {project.title}
            </h3>
            {project.badge && (
              <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm bg-gradient-to-r ${project.gradient} text-white whitespace-nowrap flex items-center gap-1`}>
                {project.badge.includes('Flagship') && <Sparkles className="w-3 h-3" />}
                {project.badge}
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-8 flex-1">
            <ul className="space-y-2">
              {project.features.map((feature: string, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string, i: number) => (
                <span 
                  key={i}
                  className="px-2 py-1 rounded-md text-xs font-mono bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href={project.githubLink}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a 
                href={project.liveLink}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all`}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border-primary/20 text-primary"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Featured</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Things I've built
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {portfolioData.projects.map((project, index) => (
            <TiltCard 
              key={index} 
              project={project} 
              index={index} 
              isFlagship={index === 0} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

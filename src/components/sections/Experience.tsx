import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Education and Experience
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
              style={{ height: lineHeight }}
            />
            {/* Animated Dot */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10"
              style={{ top: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-12">
            {portfolioData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center w-full justify-between">
                  
                  {/* Left Side (Empty on mobile, alternating on desktop) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-8' : 'order-last pl-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-6 rounded-2xl inline-block text-left w-full hover:-translate-y-1 transition-transform"
                    >
                      <span className="text-sm font-bold text-gradient mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-0" />

                  {/* Mobile Layout (Everything on right) */}
                  <div className="md:hidden w-full pl-12 pr-4 relative">
                    <div className="absolute left-[15px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-0" />
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-6 rounded-2xl w-full"
                    >
                      <span className="text-sm font-bold text-gradient mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

export default function CurrentlyLearning() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0A0A0F]/50">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            What I'm Learning Now
          </motion.h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-8 mask-edges">
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-[#0A0A0F] dark:via-transparent dark:to-[#0A0A0F]" />
        
        {/* Row 1 */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...portfolioData.currentlyLearningRow1, ...portfolioData.currentlyLearningRow1].map((item, index) => (
            <div key={index} className="px-8 py-4 glass-card rounded-2xl text-xl font-bold text-gradient flex items-center shadow-lg border border-primary/20">
              {item}
            </div>
          ))}
        </motion.div>
        
        {/* Row 2 */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 items-center w-max ml-[-50%]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {[...portfolioData.currentlyLearningRow2, ...portfolioData.currentlyLearningRow2].map((item, index) => (
            <div key={index} className="px-8 py-4 glass-card rounded-2xl text-xl font-bold text-gray-700 dark:text-gray-300 flex items-center shadow-lg border border-secondary/20">
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            "Deeply invested in understanding how AI systems work at a fundamental level — from transformer architectures to building production RAG pipelines. Goal: become an engineer who builds AI products, not just uses them."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

export default function Skills() {
  const categories = [
    { title: "Programming Languages", items: portfolioData.skills.programming, color: "group-hover:border-blue-500" },
    { title: "Frontend Development", items: portfolioData.skills.frontend, color: "group-hover:border-cyan-500" },
    { title: "Backend Development", items: portfolioData.skills.backend, color: "group-hover:border-green-500" },
    { title: "Databases", items: portfolioData.skills.databases, color: "group-hover:border-yellow-500" },
    { title: "Authentication & Security", items: portfolioData.skills.auth, color: "group-hover:border-red-500" },
    { title: "State Management", items: portfolioData.skills.stateManagement, color: "group-hover:border-purple-500" },
    { title: "Developer Tools", items: portfolioData.skills.tools, color: "group-hover:border-orange-500" },
    { title: "AI & Emerging Tech", items: portfolioData.skills.ai, color: "group-hover:border-pink-500" },
  ];

  const allSkills = Object.values(portfolioData.skills).flat();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Technologies I work with
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`glass-card rounded-2xl p-6 group transition-all duration-300 ${category.color} hover:shadow-2xl`}
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Ticker */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4 py-4 mask-edges">
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-[#0A0A0F] dark:via-transparent dark:to-[#0A0A0F]" />
          
          <motion.div 
            className="flex whitespace-nowrap gap-4 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div key={index} className="px-6 py-3 glass rounded-full text-lg font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {skill}
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex whitespace-nowrap gap-4 items-center w-max ml-[-50%]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...allSkills.reverse(), ...allSkills.reverse()].map((skill, index) => (
              <div key={index} className="px-6 py-3 glass rounded-full text-lg font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

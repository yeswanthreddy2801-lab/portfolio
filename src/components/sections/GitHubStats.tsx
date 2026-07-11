import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useTheme } from '../../hooks/useTheme';

export default function GitHubStats() {
  const { theme } = useTheme();
  
  // Custom theme variables for the vercel API to match our colors
  const githubUsername = "yeswanthreddy2801-lab";
  
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${theme === 'dark' ? 'radical' : 'default'}&hide_border=true&bg_color=${theme === 'dark' ? '111118' : 'ffffff'}`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${theme === 'dark' ? 'radical' : 'default'}&hide_border=true&bg_color=${theme === 'dark' ? '111118' : 'ffffff'}`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${theme === 'dark' ? 'radical' : 'default'}&hide_border=true&background=${theme === 'dark' ? '111118' : 'ffffff'}`;

  // Generate a mock contribution grid just for visual flair if needed, 
  // but embedding stats is cleaner
  const generateContributionGrid = () => {
    const grid = [];
    for (let i = 0; i < 52 * 7; i++) {
      // Randomly decide intensity
      const rand = Math.random();
      let colorClass = "bg-gray-200 dark:bg-white/5"; // empty
      if (rand > 0.9) colorClass = "bg-green-500";
      else if (rand > 0.75) colorClass = "bg-green-400";
      else if (rand > 0.6) colorClass = "bg-green-300 dark:bg-green-700";
      else if (rand > 0.4) colorClass = "bg-green-200 dark:bg-green-900";

      grid.push(
        <div 
          key={i} 
          className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-2 ring-primary transition-all duration-300`} 
        />
      );
    }
    return grid;
  };

  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            GitHub Activity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            My Open Source Contributions
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 items-center max-w-5xl mx-auto">
          
          {/* Visual Contribution Grid (CSS Based) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-2xl w-full overflow-hidden"
          >
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Recent Contributions</h3>
            <div className="flex gap-1 overflow-x-auto pb-4 custom-scrollbar">
              <div className="grid grid-rows-7 grid-flow-col gap-1 flex-1 min-w-max">
                {generateContributionGrid()}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-white/5" />
                <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900" />
                <div className="w-3 h-3 rounded-sm bg-green-300 dark:bg-green-700" />
                <div className="w-3 h-3 rounded-sm bg-green-400" />
                <div className="w-3 h-3 rounded-sm bg-green-500" />
              </div>
              <span>More</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-4 rounded-2xl flex justify-center hover:shadow-xl transition-shadow"
            >
              <img src={statsUrl} alt="GitHub Stats" className="w-full h-auto object-contain max-h-52" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-4 rounded-2xl flex justify-center hover:shadow-xl transition-shadow"
            >
              <img src={streakUrl} alt="GitHub Streak" className="w-full h-auto object-contain max-h-52" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-bold hover:scale-105 transition-transform"
            >
              View GitHub Profile
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

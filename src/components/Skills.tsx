import { motion } from 'motion/react';
import { Figma, Code, Laptop, Box, TrendingUp, BarChart3 } from 'lucide-react';

/**
 * ANIMATION ANNOTATIONS FOR DEVELOPER HANDOFF
 * 
 * Section Heading:
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Skill Category Cards:
 * - Animation: Fade + Slide Up (staggered)
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Stagger Delay: 100ms per card
 * - Trigger: On scroll / enter viewport
 * 
 * Tools Section (Left):
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Programming Languages Section (Right):
 * - Animation: Fade + Slide In From Right
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 */

export function Skills() {
  const skills = [
    {
      category: 'UI/UX Design',
      icon: Figma,
      items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Web Design',
      icon: Laptop,
      items: ['Responsive Design', 'Modern Layouts', 'Typography', 'Color Theory', 'Accessibility'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      category: 'Frontend Development',
      icon: Code,
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Motion'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      category: '3D Design',
      icon: Box,
      items: ['Spline', '3D Modeling', 'Texturing', 'Animation', 'Web Integration'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      category: 'SEO',
      icon: TrendingUp,
      items: ['On-page SEO', 'Technical SEO', 'Analytics', 'Performance', 'Keywords'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      category: 'Data Analysis',
      icon: BarChart3,
      items: ['Data Visualization', 'Statistics', 'ML Basics', 'Problem Solving', 'Analytics'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const tools = [
    'Figma', 'Spline', 'Framer', 'Lovable', 'Perplexity', 'VS Code', 'Git', 'Chrome DevTools'
  ];

  const languages = [
    'React.js',
    'HTML & CSS',
    'Tailwind CSS',
    'C/C++',
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Fade + Slide In From Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and design methodologies
          </p>
        </motion.div>

        {/* Skill Categories Grid - Cards Fade + Slide Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>

              {/* Animated Corner Accent */}
              <motion.div
                className={`absolute top-0 right-0 w-16 h-16 rounded-tr-xl rounded-bl-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-block p-3 bg-gradient-to-br ${skill.gradient} rounded-lg mb-4`}>
                  <skill.icon size={28} className="text-white" />
                </div>

                {/* Category Name */}
                <h3 className="text-xl text-white mb-4">{skill.category}</h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-white/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tools Section - Fade + Slide In From Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl text-cyan-400 mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Programming Languages - Fade + Slide In From Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl text-orange-400 mb-6">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-lg text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all cursor-default"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Code2, Palette, Rocket, GraduationCap } from 'lucide-react';

/**
 * ANIMATION ANNOTATIONS FOR DEVELOPER HANDOFF
 * 
 * Section Heading:
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Text Content (Left Column):
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Cards Grid (Right Column):
 * - Animation: Fade + Slide In From Right
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Individual Cards:
 * - Animation: Fade + Slide Up (staggered)
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Stagger Delay: 100ms per card
 * - Trigger: On scroll / enter viewport
 */

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>

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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content - Fade + Slide In From Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi! I'm <span className="text-orange-400">Bedabrata Paul</span>, an engineering student specializing in <span className="text-cyan-400">Computer Science & Engineering (AI & ML)</span> with a deep passion for creating eye-catching, interactive, and user-friendly digital experiences.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                As a UI/UX designer and frontend developer, I merge creativity with cutting-edge technology to build beautiful digital solutions. My expertise spans across design tools like <span className="text-purple-400">Figma, Spline, Framer, and Lovable</span>, combined with technical skills in <span className="text-cyan-400">React.js, HTML, CSS, C, and C++</span>.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I have a keen eye for detail and dedication to building interactive, user-centered experiences that stand out. Whether it's crafting pixel-perfect interfaces, developing responsive web applications, or designing stunning 3D visuals, I bring innovation and modern aesthetics to every project.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I'm also the founder of <span className="text-orange-400">BEYOND POWERED</span>, a digital services & consultancy startup focused on delivering cutting-edge solutions for businesses and creators.
              </p>

              {/* Education Card - Fade + Slide Up */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-cyan-400 mb-2">Education</h3>
                    <p className="text-white">B.Tech in CSE (AI & ML)</p>
                    <p className="text-gray-400">Narula Institute of Technology, Kolkata</p>
                    <p className="text-sm text-gray-500 mt-1">Expected Graduation: 2028</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Cards Grid - Fade + Slide In From Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Code2,
                title: 'Frontend Development',
                description: 'Building responsive, performant web applications with modern frameworks',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Creating intuitive, beautiful interfaces that users love',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Rocket,
                title: '3D Design',
                description: 'Crafting stunning 3D visuals and interactive experiences',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: Code2,
                title: 'AI & ML',
                description: 'Leveraging AI to build intelligent, innovative solutions',
                gradient: 'from-green-500 to-teal-500',
              },
            ].map((card, index) => (
              // Individual Cards - Fade + Slide Up (staggered)
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)]"
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-block p-3 bg-gradient-to-br ${card.gradient} rounded-lg mb-4`}>
                    <card.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

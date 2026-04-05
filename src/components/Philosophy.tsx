import { motion } from 'motion/react';
import { Lightbulb, Target, Heart, Sparkles, Code2, Zap } from 'lucide-react';

/**
 * ANIMATION ANNOTATIONS FOR DEVELOPER HANDOFF
 * 
 * Section Heading & Badge:
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Main Statement Card:
 * - Animation: Fade + Slide Up
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Principle Cards:
 * - Animation: Fade + Slide Up (staggered)
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Stagger Delay: 100ms per card
 * - Trigger: On scroll / enter viewport
 * 
 * Closing Statement:
 * - Animation: Fade + Slide Up
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 */

export function Philosophy() {
  const principles = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      quote: 'Every project is an opportunity to push boundaries and create something extraordinary.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Target,
      title: 'Results Driven',
      quote: "Your success is my success. I don't just build products—I build solutions that drive real results.",
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Passion & Dedication',
      quote: 'I pour my heart into every pixel, every line of code, because mediocre is not in my vocabulary.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Fade + Slide In From Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-sm text-gray-300">My Philosophy</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Why Choose Me?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I believe in creating digital experiences that don't just meet expectations—they exceed them. 
            When you work with me, you're not getting a service provider; you're gaining a dedicated partner 
            invested in your vision.
          </p>
        </motion.div>

        {/* Main Statement - Fade + Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                  <Zap className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl text-white mb-4">
                    "Transform Your Ideas Into Digital Reality"
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    In today's digital landscape, having a strong online presence isn't optional—it's essential. 
                    I specialize in transforming complex ideas into elegant, functional, and stunning digital experiences. 
                    Whether it's crafting intuitive UI/UX designs, developing cutting-edge AI solutions, or building 
                    responsive web applications, I bring technical expertise and creative vision to every project.
                  </p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16 space-y-4 text-gray-400">
                <p className="flex items-start space-x-3">
                  <span className="text-cyan-400 mt-1">✦</span>
                  <span>
                    <strong className="text-white">Commitment to Excellence:</strong> I don't believe in "good enough." 
                    Every project gets my full attention to detail, ensuring pixel-perfect designs and clean, maintainable code.
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">✦</span>
                  <span>
                    <strong className="text-white">Clear Communication:</strong> You'll never be left in the dark. 
                    I believe in transparency, regular updates, and being available when you need me.
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">✦</span>
                  <span>
                    <strong className="text-white">Future-Proof Solutions:</strong> Technology evolves rapidly. 
                    I build with scalability and longevity in mind, so your investment continues to deliver value.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Principles - Cards Fade + Slide Up (staggered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-br ${principle.gradient} bg-opacity-20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl text-white mb-4 group-hover:bg-gradient-to-r group-hover:${principle.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {principle.title}
                    </h3>

                    {/* Quote */}
                    <p className="text-gray-400 leading-relaxed italic">
                      "{principle.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement - Fade + Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 blur-xl"></div>
            <p className="relative text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-8 py-6">
              "Let's not just meet your goals—let's exceed them. Together, we'll create something 
              that makes you proud and your users delighted. <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Your vision deserves the best</span>, and I'm here to deliver exactly that."
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-gray-500 italic">— Bedabrata Paul</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-32 h-32 border-2 border-cyan-500/10 rounded-full hidden lg:block"
      ></motion.div>
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-40 h-40 border-2 border-purple-500/10 rounded-full hidden lg:block"
      ></motion.div>
    </section>
  );
}
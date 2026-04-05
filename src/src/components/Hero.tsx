import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-sm text-gray-300">Available for freelance work</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-6 relative"
            >
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.3em]">
                  <span 
                    className="inline-block bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                  >
                    BEDABRATA PAUL
                  </span>
                </h2>
                
                {/* Animated underline with gradient */}
                <div className="relative mt-3 h-1 overflow-hidden">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30" />
                </div>

                {/* Corner accent decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/40"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 heading-font relative"
            >
              <span className="block text-gray-400 text-xl mb-2">I'M A</span>
              
              {/* UI/UX */}
              <div className="relative mb-2">
                <span 
                  className="relative block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                >
                  UI/UX
                </span>
              </div>

              {/* DESIGNER */}
              <div className="relative">
                <span 
                  className="relative block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-300 via-orange-400 to-pink-400 bg-clip-text text-transparent"
                >
                  DESIGNER
                </span>
                
                {/* Accent line on right */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute right-0 top-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="h-[2px] mt-4 bg-gradient-to-r from-orange-400 via-pink-400 to-transparent"
              />

              {/* Small accent dots */}
              <div className="flex items-center gap-2 mt-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8, type: "spring" }}
                  className="w-2 h-2 rounded-full bg-orange-400"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.9, type: "spring" }}
                  className="w-2 h-2 rounded-full bg-pink-400"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.0, type: "spring" }}
                  className="w-2 h-2 rounded-full bg-purple-400"
                />
              </div>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-6"
            >
              <p className="text-gray-400 text-lg">
                Frontend Developer • Web Designer • 3D Designer
              </p>
              <p className="text-gray-400 text-lg">
                AI/ML Enthusiast • Founder of BEYOND POWERED
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              Crafting interactive, beautiful, and futuristic digital experiences that merge creativity with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View Portfolio</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-8"
            >
              <div>
                <div className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Simple rotating gradient rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute w-[420px] h-[420px] border-2 border-cyan-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute w-[460px] h-[460px] border-2 border-purple-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute w-[500px] h-[500px]">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400/60 rounded-full blur-[2px] -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400/60 rounded-full blur-[2px] -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-orange-400/60 rounded-full blur-[2px] -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-pink-400/60 rounded-full blur-[2px] -translate-y-1/2"></div>
              </div>
            </motion.div>

            {/* Profile Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <ImageWithFallback
                src="https://i.postimg.cc/sD0gzGtJ/Portfolio-image.jpg"
                alt="Bedabrata Paul"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

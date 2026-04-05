import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-7xl text-white leading-[1.15] tracking-tight"
        >
          I'm{' '}
          <span className="relative inline-block">
            Bedabrata Paul
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-cyan-400 origin-left"
            />
          </span>
          , a{' '}
          <span className="relative inline-block">
            UI/UX designer
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-white/25 origin-left"
            />
          </span>
          {' '}turning ideas into engaging and impactful digital experiences.
        </motion.h1>
      </div>
    </section>
  );
}
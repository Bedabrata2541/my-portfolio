import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase('exit'), 350);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          {/* Subtle ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

          {/* Spinner + monogram */}
          <div className="relative flex items-center justify-center w-24 h-24">

            {/* Spinning arc */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 96 96"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="48" cy="48" r="44"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1.5"
              />
              <circle
                cx="48" cy="48" r="44"
                stroke="url(#arc-grad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="80 196"
                strokeDashoffset="0"
              />
              <defs>
                <linearGradient id="arc-grad" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Monogram */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative text-3xl text-white select-none"
              style={{ fontWeight: 600, letterSpacing: '-0.02em' }}
            >
              B
            </motion.span>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-8 text-[11px] tracking-[0.3em] uppercase text-gray-500"
          >
            Bedabrata Paul
          </motion.p>

          {/* Progress bar */}
          <div className="mt-6 w-32 h-px bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { PageId } from '../App';

interface NavigationProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

const navItems: { name: string; id: PageId }[] = [
  { name: 'Home',         id: 'home' },
  { name: 'About',        id: 'about' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact',      id: 'contact' },
];

export function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navigate = (id: PageId) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Nav bar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-18 py-5">

            {/* Desktop nav — centered */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => {
                const isActive = activePage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative group text-sm tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}

                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />

                    {/* Active glow dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile hamburger — single button, always z-[80] so it floats above overlay */}
            <div className="md:hidden flex w-full justify-end">
              <button
                className="relative text-white p-2 -mr-1 z-[80]"
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0,  opacity: 1 }}
                      exit={{   rotate:  45, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      style={{ display: 'block' }}
                    >
                      <X size={24} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 45,  opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{   rotate: -45,  opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      style={{ display: 'block' }}
                    >
                      <Menu size={24} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile full-screen overlay ──
          Rendered OUTSIDE <nav> so there is no stacking-context conflict.
          z-[60] sits below the nav bar (z-[70]) so the hamburger button
          is always visible and clickable on top of the overlay.           */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{   opacity: 0,  y: -16  }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#060608]/97 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navItems.map((item, index) => {
                const isActive = activePage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ delay: 0.06 * index, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-2xl tracking-widest uppercase transition-colors duration-300 ${
                      isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

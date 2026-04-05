import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { LoadingScreen } from './components/LoadingScreen';
import faviconSrc from 'figma:asset/d74f8d0597423641e2d997fe8b5ea10b66f7ee48.png';

export type PageId = 'home' | 'about' | 'achievements' | 'contact';

const pageTransition = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [loaded, setLoaded] = useState(false);

  // Set the favicon dynamically from the imported asset
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = faviconSrc;
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">
        <BackgroundAnimation />
        <div className="relative z-10">
          <Navigation activePage={activePage} setActivePage={setActivePage} />

          <AnimatePresence mode="wait">
            {activePage === 'home' && (
              <motion.div key="home" {...pageTransition}>
                <Hero />
                <Projects />
              </motion.div>
            )}

            {activePage === 'about' && (
              <motion.div key="about" {...pageTransition}>
                <About />
              </motion.div>
            )}

            {activePage === 'achievements' && (
              <motion.div key="achievements" {...pageTransition}>
                <Hackathons />
              </motion.div>
            )}

            {activePage === 'contact' && (
              <motion.div key="contact" {...pageTransition}>
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

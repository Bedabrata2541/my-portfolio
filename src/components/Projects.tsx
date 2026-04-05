import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import devArenaImage from 'figma:asset/9add32f5fdf8d2fd3ce44a850d26502a8f84f44b.png';
import pragatiImage from 'figma:asset/3cb1e2bee31d11b13ba4b74787a645aea5fcdbb0.png';
import sanjeevaniImage from 'figma:asset/2286c74dd8306eb7dca8d4f5a3d01970d2ec35f3.png';
import trinetraImage from 'figma:asset/8dc8072048bb3f90297fa1444268559bab2cd961.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tools: string[];
  role: string;
  link?: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    title: 'DevArena UI',
    description: 'DevArena is a platform for coders and innovators where they can discover ongoing and upcoming hackathons, coding contests, and tech competitions without searching multiple websites.',
    image: devArenaImage,
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design'],
    role: 'UI/UX Design · Frontend Development',
    link: 'https://dev-arena-chi.vercel.app/',
  },
  {
    title: 'Pragati Coaching Centre',
    description: 'Complete UI design and full frontend development for an educational coaching center. Features modern design, responsive layout, and smooth animations.',
    image: pragatiImage,
    tools: ['Figma', 'React.js', 'Tailwind CSS', 'Motion'],
    role: 'UI/UX Design · Frontend Development',
    link: 'https://www.pragatilive.com/',
  },
  {
    title: 'Sanjeevani',
    description: 'AI-powered healthcare chatbot providing medical information and assistance with intelligent conversation flow and natural language processing.',
    image: sanjeevaniImage,
    tools: ['AI/ML', 'NLP', 'Healthcare APIs'],
    role: 'AI Development · UX Design',
    link: 'https://sanjeevani-five.vercel.app/',
  },
  {
    title: 'Trinetra',
    description: 'AI assistant for the visually impaired with voice commands, object detection, and text-to-speech for enhanced accessibility.',
    image: trinetraImage,
    tools: ['Computer Vision', 'AI/ML', 'Voice API'],
    role: 'AI Development · Product Design',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-[160px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs text-cyan-400 tracking-[0.3em] uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl text-white">Featured Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: (index % 2) * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Wrap entire card in <a> if a link exists, otherwise plain div */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-all duration-400 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>

                    {project.inProgress && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/20 rounded-full">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-white text-base mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <p className="text-gray-600 text-xs mb-3">{project.role}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs text-gray-400 border border-white/8 rounded-full bg-white/[0.03]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-400">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>

                    {project.inProgress && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/20 rounded-full">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-white text-base mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <p className="text-gray-600 text-xs mb-3">{project.role}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs text-gray-400 border border-white/8 rounded-full bg-white/[0.03]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social icons — bottom right of section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-end max-w-4xl mx-auto mt-8 gap-3"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/bedabrata.paul/"  // ← replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
          >
            <Instagram
              size={15}
              className="text-gray-500 group-hover:text-white transition-colors duration-300"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bedabrata-paul/"  // ← replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
          >
            <Linkedin
              size={15}
              className="text-gray-500 group-hover:text-white transition-colors duration-300"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
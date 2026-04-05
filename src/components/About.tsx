import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import profilePhoto from 'figma:asset/1a49a9ee8d6e6b7f347cc30c9d310c4b13d75865.png';

const skillCategories = [
  {
    label: 'UI/UX Design',
    items: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    label: 'Web Design',
    items: ['Responsive Design', 'Typography', 'Color Theory', 'Accessibility'],
  },
  {
    label: 'Frontend Development',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Motion'],
  },
  {
    label: '3D & Spatial',
    items: ['Spline', '3D Modeling', 'Web Integration', 'Animation'],
  },
  {
    label: 'AI',
    items: ['Vibe-coding', 'Figma Make', 'Claude', 'Research Synthesis', 'Generative Ideation'],
  },
];

const tools = ['Figma', 'Spline', 'Framer', 'Lovable', 'VS Code', 'Git', 'Perplexity'];
const languages = ['React.js', 'HTML & CSS', 'Tailwind CSS', 'C / C++'];

const otherWorks = [
  {
    title: 'BEYOND POWERED',
    role: 'Founder · Digital Services & Consultancy',
    tools: ['Branding', 'Web Development', 'Consulting'],
    inProgress: true,
  },
  {
    title: 'Manab Sewa Charitable Trust',
    role: 'UI/UX Design · Frontend Development',
    tools: ['Figma', 'React.js', 'Tailwind CSS'],
    inProgress: false,
  },
  {
    title: 'AI Career Guidance Chatbot',
    role: 'AI Development · UX Design',
    tools: ['AI/ML', 'NLP'],
    inProgress: false,
  },
  {
    title: 'Freelance 3D Design',
    role: '3D Design · Web Integration',
    tools: ['Spline', '3D Modeling'],
    inProgress: false,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-[160px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mb-14 flex items-center gap-12 max-w-4xl"
        >
          <div className="flex-1">
            <p className="text-xs text-cyan-400 tracking-[0.3em] uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Engineering student, designer, and founder building at the intersection of creativity and technology.
            </h2>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="shrink-0 hidden sm:block"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-blue-500/40 blur-sm" />
              {/* Border ring */}
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-blue-500/60" />
              {/* Image */}
              <div className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-transparent">
                <img
                  src={profilePhoto}
                  alt="Bedabrata Paul"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile-only profile photo — shown below heading on small screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:hidden"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-blue-500/40 blur-sm" />
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-blue-500/60" />
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-transparent">
              <img
                src={profilePhoto}
                alt="Bedabrata Paul"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-base leading-relaxed">
              I'm <span className="text-white">Bedabrata Paul</span>, specializing in{' '}
              <span className="text-white">CSE (AI & ML)</span> with a passion for building interactive,
              user-friendly digital experiences. I work across UI/UX design, frontend development, and 3D
              design — combining technical precision with a strong design sensibility.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              I'm also the founder of{' '}
              <span className="text-white">BEYOND POWERED</span>, a digital services and consultancy startup
              focused on delivering meaningful solutions for businesses and creators.
            </p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 border border-white/10 rounded-xl bg-white/[0.03]"
            >
              <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg shrink-0">
                <GraduationCap size={20} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white text-sm">B.Tech in CSE (AI & ML)</p>
                <p className="text-gray-500 text-sm mt-0.5">Narula Institute of Technology, Kolkata</p>
                <p className="text-gray-600 text-xs mt-1">Expected Graduation: 2028</p>
              </div>
            </motion.div>

            {/* Tools */}
            <div>
              <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-3">Tools & Platforms</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 text-xs text-gray-300 border border-white/10 rounded-full bg-white/[0.03] hover:border-cyan-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-3">Languages & Frameworks</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 text-xs text-gray-300 border border-white/10 rounded-full bg-white/[0.03] hover:border-cyan-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-5">Skills & Expertise</p>
            {skillCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group p-5 border border-white/10 rounded-xl bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-white text-sm shrink-0 w-36">{cat.label}</p>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {cat.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs text-gray-400 border border-white/8 rounded-full bg-white/[0.03]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Works */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-6">Other Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group p-4 border border-white/8 rounded-xl bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-white text-sm leading-snug">{work.title}</p>
                  {work.inProgress && (
                    <span className="shrink-0 px-1.5 py-0.5 text-[9px] bg-orange-500/15 text-orange-400 border border-orange-500/20 rounded-full">
                      WIP
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-xs mb-3">{work.role}</p>
                <div className="flex flex-wrap gap-1">
                  {work.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] text-gray-500 border border-white/6 rounded-full bg-white/[0.02]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
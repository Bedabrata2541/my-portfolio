import { motion } from 'motion/react';
import { Trophy, Medal, FileText, Users, Star } from 'lucide-react';

type AchievementType = 'Hackathon' | 'Publication' | 'Award' | 'Competition';

interface Achievement {
  type: AchievementType;
  title: string;
  event: string;
  organizer: string;
  date: string;
  description: string;
  result?: string;
  team?: string;
}

const typeConfig: Record<AchievementType, { icon: React.ElementType; color: string; border: string; badge: string }> = {
  Hackathon:   { icon: Trophy,    color: 'text-cyan-400',   border: 'border-cyan-500/20',   badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  Publication: { icon: FileText,  color: 'text-purple-400', border: 'border-purple-500/20', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  Award:       { icon: Star,      color: 'text-orange-400', border: 'border-orange-500/20', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  Competition: { icon: Medal,     color: 'text-blue-400',   border: 'border-blue-500/20',   badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
};

const achievements: Achievement[] = [
  {
    type: 'Publication',
    title: 'Face Mask Detection Systems Research Paper',
    event: 'DTDCFAC-2026 National Conference',
    organizer: 'AICTE Sponsored National Conference on Digital Technology Developments Connecting the Future of Applications of Computing',
    date: '2026',
    description: 'Published research on "Artificial Vision in a Masked World: Advances and Prospects in Face Mask Detection Systems" exploring deep learning approaches for real-time face mask detection.',
    result: 'Published',
    team: 'Research Team',
  },
  {
    type: 'Hackathon',
    title: 'Smart India Hackathon',
    event: 'SIH — Internal Hackathon Round',
    organizer: 'Narula Institute of Technology',
    date: '2025',
    description: 'Developed an AI-powered solution addressing a real-world government problem statement. Built a functional prototype within 24 hours covering UI/UX, frontend, and AI integration.',
    team: 'Team of 6',
  },
  {
    type: 'Hackathon',
    title: 'HackLoop 2k25 — Finalist',
    event: 'HackLoop 2k25 Hackathon',
    organizer: 'HackLoop 2k25',
    date: '2025',
    description: 'Reached the finalist round presenting Trinetra — an AI assistant for the visually impaired with voice commands, object detection, and text-to-speech for enhanced accessibility.',
    result: 'Finalist',
    team: 'Team Project',
  },
  {
    type: 'Hackathon',
    title: 'HackGear 2.0 — Finalist',
    event: 'HackGear 2.0 Hackathon',
    organizer: 'HackGear 2.0',
    date: '2025',
    description: 'Reached the finalist round presenting Sanjeevani — an AI-powered healthcare chatbot providing medical information and assistance with intelligent conversation flow and natural language processing.',
    result: 'Finalist',
    team: 'Team Project',
  },
];

export function Hackathons() {
  return (
    <section id="hackathons" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/6 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/6 rounded-full blur-[160px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs text-cyan-400 tracking-[0.3em] uppercase mb-3">Milestones</p>
          <h2 className="text-3xl md:text-4xl text-white">Hackathons & Achievements</h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
        >
          {[
            { value: '3+', label: 'Hackathons' },
            { value: '1', label: 'Research Published' },
            { value: '30+', label: 'Projects Built' },
            { value: '10+', label: 'Happy Clients' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 border border-white/10 rounded-xl bg-white/[0.02] text-center"
            >
              <p className="text-2xl text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, index) => {
            const cfg = typeConfig[item.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut', delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 border ${cfg.border} rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/8`}>
                    <Icon size={18} className={cfg.color} />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`px-2 py-0.5 text-[10px] border rounded-full ${cfg.badge}`}>
                      {item.type}
                    </span>
                    <span className="text-gray-600 text-[10px]">{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-sm mb-1 leading-snug">{item.title}</h3>
                <p className={`text-xs mb-1 ${cfg.color}`}>{item.event}</p>
                <p className="text-gray-600 text-xs mb-3">{item.organizer}</p>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{item.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/6">
                  {item.team && (
                    <div className="flex items-center gap-1.5">
                      <Users size={11} className="text-gray-600" />
                      <span className="text-gray-600 text-[10px]">{item.team}</span>
                    </div>
                  )}
                  {item.result && (
                    <span className="px-2 py-0.5 text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 rounded-full ml-auto">
                      {item.result}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
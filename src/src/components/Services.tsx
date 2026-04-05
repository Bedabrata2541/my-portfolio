import { motion } from 'motion/react';
import { Palette, Code, Box, Briefcase } from 'lucide-react';

/**
 * ANIMATION ANNOTATIONS FOR DEVELOPER HANDOFF
 * 
 * Section Heading:
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Service Cards:
 * - Animation: Fade + Slide Up (staggered)
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Stagger Delay: 150ms per card
 * - Trigger: On scroll / enter viewport
 * 
 * Beyond Powered Section:
 * - Animation: Fade + Slide Up
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 */

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Complete interface design from wireframes to high-fidelity prototypes. Creating intuitive, user-centered experiences that delight.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Mobile & Web Interfaces'
      ],
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Building responsive, performant websites with modern frameworks and cutting-edge animations. Pixel-perfect implementation.',
      features: [
        'React.js Development',
        'Responsive Design',
        'Interactive Animations',
        'Performance Optimization',
        'Modern UI Components'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'rgba(6, 182, 212, 0.4)',
    },
    {
      icon: Box,
      title: '3D Design',
      description: 'Creating stunning 3D assets for websites, branding, and product visualization. Bringing depth and dimension to digital experiences.',
      features: [
        '3D Modeling & Texturing',
        'Web 3D Integration',
        'Product Visualization',
        'Interactive 3D Elements',
        'Branding Assets'
      ],
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'rgba(251, 146, 60, 0.4)',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Fade + Slide In From Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional digital services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid - Cards Fade + Slide Up */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl"
              >
                {/* Neon Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                  style={{ boxShadow: `0 0 80px ${service.glowColor}` }}
                ></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 blur-xl`}></div>
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-white mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.15 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beyond Powered Section - Fade + Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-2xl backdrop-blur-sm overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="text-orange-400" size={32} />
                <h3 className="text-3xl text-white">BEYOND POWERED</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Digital services & consultancy startup delivering cutting-edge solutions for businesses and creators.
              </p>
              <p className="text-gray-400">
                Specialized in web design, branding, digital marketing, and innovative tech solutions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                Coming Soon
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

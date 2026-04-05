import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Send, MapPin, Phone, CheckCircle, XCircle, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * ANIMATION ANNOTATIONS FOR DEVELOPER HANDOFF
 * 
 * Section Heading:
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Contact Info (Left Column):
 * - Animation: Fade + Slide In From Left
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Contact Form (Right Column):
 * - Animation: Fade + Slide In From Right
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Trigger: On scroll / enter viewport
 * 
 * Contact Method Cards:
 * - Animation: Fade + Slide In From Left (staggered)
 * - Duration: 700ms
 * - Easing: ease-in-out
 * - Stagger Delay: 100ms per card
 * - Trigger: On scroll / enter viewport
 */

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Bedabrata Paul',
      };

      await emailjs.send(
        'service_7yqv5tl', // Service ID
        'template_nnumffd', // Template ID
        templateParams,
        '7jSFMDcDExjdYi4d5' // Public Key
      );

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bedabratapaul2541@gmail.com',
      href: 'mailto:bedabratapaul2541@gmail.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bedabrata-paul-8a76b2325',
      href: 'https://www.linkedin.com/in/bedabrata-paul-8a76b2325',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@onemore_problem',
      href: 'https://instagram.com/onemore_problem',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@bedabrata_',
      href: 'https://twitter.com/bedabrata_',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 75px 75px',
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always excited to work on innovative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info - Fade + Slide In From Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's talk about everything!</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out. I'm always open to discussing new opportunities and innovative ideas.
              </p>
            </div>

            {/* Contact Methods - Staggered Fade + Slide In From Left */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)]"
                >
                  <div className={`p-3 bg-gradient-to-br ${method.gradient} rounded-lg group-hover:scale-110 transition-transform relative`}
                  >
                    <method.icon size={24} className="text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{method.label}</div>
                    <div className="text-white">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location - Fade + Slide Up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white mb-1">Location</div>
                  <div className="text-gray-400">Kolkata, West Bengal, India</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form - Fade + Slide In From Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all group-hover:border-white/20"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all group-hover:border-white/20"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none group-hover:border-white/20"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : error ? 'Failed to Send' : 'Send Message'}</span>
                {submitted ? (
                  <CheckCircle size={18} />
                ) : error ? (
                  <XCircle size={18} />
                ) : (
                  <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3"
                >
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3"
                >
                  <XCircle size={20} />
                  <span>Oops! Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer - Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © 2026 Bedabrata Paul. Built with passion and innovation.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed by Bedabrata Paul
          </p>
        </motion.div>
      </div>
    </section>
  );
}
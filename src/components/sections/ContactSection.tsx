import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://new-portfolio-ep71.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      alert('Error sending message, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'bhavargrover4@gmail.com',
      href: 'mailto:bhavargrover4@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '9350117308',
      href: 'tel:+91 9350117308'
    },
  ];


  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="card flex items-start gap-4 hover:bg-slate-50 hover:dark:bg-slate-700/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5 }}
                  target={item.title === 'Location' ? '_blank' : undefined}
                  rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700"
                  placeholder="Your message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`btn btn-primary flex items-center justify-center gap-2 w-full md:w-auto ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  } ${isSubmitted ? 'bg-success-600 hover:bg-success-700' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import AboutModel from '../3d/AboutModel';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Projects Completed' },
    { value: '50+', label: 'Hours of Learning' },
    { value: '85%', label: 'Passion for Coding' },
    { value: 'Infinite', label: 'Creativity' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for full stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model */}
          <motion.div 
            className="h-64 md:h-96 lg:h-[500px] relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AboutModel />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Passionate Full Stack Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I am a self-motivated full stack developer with a strong foundation in HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
              I enjoy creating responsive web applications and exploring 3D animations to build modern, interactive digital experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              My journey as a developer has just begun, and I am constantly learning new technologies to push my skills further. 
              I love turning ideas into reality through code and exploring the latest trends in web development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <a 
                href="#contact" 
                className="btn btn-primary inline-block"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

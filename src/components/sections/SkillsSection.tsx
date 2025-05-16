import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import SkillsModel from '../3d/SkillsModel';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: '3D & Animation',
    items: ['Three.js', 'Framer Motion', 'GSAP']
  },
  {
    category: 'Backend & Tools',
    items: ['Node.js', 'Express', 'MongoDB',]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            My Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I am a dedicated full-stack developer with a foundation in both front-end and back-end technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* 3D Skills Model */}
          <motion.div 
            className="h-64 mb-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <SkillsModel />
              </Suspense>
            </Canvas>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * groupIndex }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + (0.05 * skillIndex) }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
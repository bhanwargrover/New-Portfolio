import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModel from '../3d/ProjectModel';

const projects = [
  {
    id: 1,
    title: 'SR.TUFF.GLASS',
    description: ' A premium glass solutions provider offering high-quality, toughened glass products for commercial and residential spaces. SR.TUFF.GLASS is known for its precision, durability, and innovative designs, enhancing interiors with superior glass technology.',
    technologies: [ 'React+vite','Tailwind' ],
    image: 'https://srtuffglass.com/wp-content/uploads/2025/03/glass-img.jpg',
    link: 'https://srtuffglass.com/'
  },
  {
    id: 2,
    title: 'Digital Marketing Portfolio – Strategy, Growth, Impact',
    description: 'A professional portfolio showcasing expertise in digital marketing, including brand growth strategies, performance marketing, content creation, SEO, and data-driven campaigns. Built to connect, engage, and inspire.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'image/Portfoilio.jpg',
    link: 'https://boisterous-entremet-31afed.netlify.app/'
  },
  {
    id: 3,
    title: 'Building the Future – One Line of Code at a Time',
    description: 'A dynamic portfolio showcasing full-stack web development projects, including frontend designs, backend logic, API integration, and modern web technologies. Built to demonstrate coding expertise and creative problem-solving.',
    technologies: ['Html', 'Css', 'Js','React','Node.js'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
     link: '#'
   
  },
  {
    id: 4,
    title: 'Chatbot',
    description: 'A lightweight chatbot built using JavaScript and Node.js that responds to user inputs without relying on external APIs or API keys. This project demonstrates basic natural language processing and conversational logic with pre-defined responses, making it ideal for beginners exploring chatbot development and server-side handling in a standalone environment',
    technologies: [ 'JavaScript', 'Node.js'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCJx8zUpYCC7W5d-Izs3lxB_AgyhigLYzQw&s',
    link: '#'
  }
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my latest work and creative coding experiments.
          </p>
        </motion.div>

        {/* 3D Project Preview */}
        <motion.div 
          className="h-64 md:h-80 mb-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <ProjectModel selectedProject={selectedProject} />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <a href="#" className="btn btn-outline">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
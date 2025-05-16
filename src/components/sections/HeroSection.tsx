import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import HeroModel from '../3d/HeroModel';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-4 md:px-16 lg:px-24 bg-gray-100 dark:bg-gray-900">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <HeroModel />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 max-w-5xl w-full text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h2 className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">Hello, I'm</h2>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="block mb-2">Bhanwar Grover</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <h3 className="text-lg md:text-3xl font-black mb-6 dark:text-gray-300 ">
            Creative Developer & Full Stack Enthusiast
          </h3>
          <p className="text-base md:text-lg mb-8 dark:text-gray-400 max-w-2xl font-black">
            I build modern, responsive web applications using the latest technologies like React, Node.js, and MongoDB. I enjoy creating interactive 3D experiences and bringing innovative ideas to life.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#projects" className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 transition-colors dark:bg-purple-600 dark:hover:bg-purple-700">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors dark:border-purple-600 dark:text-purple-600 dark:hover:bg-purple-700 dark:hover:text-white">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-sm mb-2 text-gray-700 dark:text-gray-400 text-center pt-6 font-bold">Scroll Down</p>
        <motion.div 
          className="w-6 h-10 border-2 border-gray-700 dark:border-gray-400 rounded-full flex justify-center pt-2" 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-700 dark:bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Code size={64} className="text-primary-500" />
      </motion.div>
      
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Creative Developer Portfolio
      </motion.h1>
      
      <motion.div
        className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 256, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ 
            delay: 0.5, 
            duration: 2.5,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <motion.p
        className="mt-4 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Loading amazing experiences...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
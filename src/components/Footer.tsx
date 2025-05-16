import React from 'react';
import { Github, Linkedin,  Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-8 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              A showcase of my work, skills, and a creative developer.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/bhanwargrover" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhanwar-grover-587a55288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
             
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>
                <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>bhavargrover4@gmail.com</li>
              <li>9350117308</li>
            
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center text-slate-600 dark:text-slate-300">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Portfolio.  All Rights Reserved.<Heart size={16}  className="text-red-500" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { Loader } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen bg-slate-50 dark:bg-slate-900">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <>
              <Navbar />
              <Home />
            </>
          )}
        </AnimatePresence>
        <Loader 
          containerStyles={{
            background: 'transparent',
            zIndex: 1000,
          }}
          innerStyles={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            width: '100px',
            height: '1px',
          }}
          barStyles={{
            backgroundColor: '#7c3aed',
            height: '1px',
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App
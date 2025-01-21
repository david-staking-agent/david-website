import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollLines = () => {
  const [lines, setLines] = useState([]);
  
  const createLine = useCallback(() => ({
    id: Date.now(),
    x: Math.random() * window.innerWidth,
    width: 1, // Fixed width for better performance
  }), []);

  useEffect(() => {
    let lastTime = Date.now();
    let rafId;
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastTime < 50) return; // Throttle to max 20 updates per second
      lastTime = now;
      
      rafId = requestAnimationFrame(() => {
        setLines(prev => {
          const newLines = [...prev, createLine()];
          return newLines.slice(-6); // Limit to 6 lines maximum
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [createLine]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {lines.map(line => (
          <motion.div
            key={line.id}
            initial={{ 
              opacity: 0,
              height: 0,
              left: line.x
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              height: ['0vh', '100vh', '0vh'],
              top: ['-10%', '110%']
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, #00f6ff, transparent)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ScrollLines;
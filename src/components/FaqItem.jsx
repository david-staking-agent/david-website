import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-black/50 backdrop-blur-sm overflow-hidden group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left transition-all duration-300
                 hover:bg-cyber-blue/5 border border-cyber-blue/20"
      >
        <span className="text-white font-mono tracking-wider">{question}</span>
        <motion.span 
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-cyber-blue ml-4"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t-0 border border-cyber-blue/20"
          >
            <div className="p-6 bg-cyber-blue/5">
              <p className="text-gray-400 tracking-wide leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner Accent */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-black flex items-center justify-center">
        <div className={`w-2 h-2 bg-cyber-blue ${isOpen ? 'animate-pulse-glow' : ''}`} />
      </div>
    </motion.div>
  );
};

export default FaqItem;
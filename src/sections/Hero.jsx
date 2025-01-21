import { motion } from "framer-motion";
import TypeWriter from "../components/TypeWriter";

const Hero = () => {
  return (
    <header className="relative min-h-screen hero-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-screen px-4"
      >
        <div className="terminal-text text-sm text-cyber-magenta mb-8 tracking-wider">
          <TypeWriter text="INITIALIZING_STAKING" />
        </div>

        <h1 className="text-9xl font-black mb-2 tracking-tighter">
          <span className="text-cyber-blue glow-text">DAVID</span>
          {/* <span className="text-white">AGENT</span> */}
        </h1>

        <div className="cyber-border w-32 h-1 my-8" />

        <p className="text-1xl mb-12 text-gray-400 font-light tracking-wide max-w-xl text-center">
          YOUR DEFI STAKING AGENT
        </p>

        <div className="flex gap-6">
          <a href="https://t.me/David_StakeBot">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cyber-border bg-black/50 px-12 py-4 text-cyber-blue
                     hover:bg-cyber-blue/10 transition-all duration-300
                     tracking-wider text-sm"
            >
              START_CHATTING
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 text-gray-400
                     hover:text-white transition-colors duration-300
                     tracking-wider text-sm"
          >
            READ_DOCS
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;

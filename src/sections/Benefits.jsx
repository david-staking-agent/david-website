import { FaGasPump, FaRobot, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import TypeWriter from "../components/TypeWriter";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Benefits = () => {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="relative z-10">
        <div className="terminal-text text-sm text-center mb-12 text-gray-400">
          <TypeWriter text="LOADING_SYSTEM_FEATURES" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Gas-less Operations */}
          <div className="text-center group">
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingAnimation}
              className="mb-6"
            >
              <FaGasPump className="text-cyber-blue text-6xl mx-auto filter drop-shadow-[0_0_8px_rgba(0,246,255,0.5)]" />
            </motion.div>

            <h3
              className="text-xl font-bold mb-3 text-white tracking-wider group-hover:text-cyber-blue
                         transition-colors duration-300"
            >
              GAS_FREE
            </h3>

            {/* <p className="text-gray-400 text-sm leading-relaxed">
              Zero gas fees for all operations. Our advanced relayer network handles all transaction
              costs.
            </p> */}
          </div>

          {/* Self Executing */}
          <div className="text-center group">
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingAnimation}
              className="mb-6"
            >
              <FaRobot className="text-cyber-blue text-6xl mx-auto filter drop-shadow-[0_0_8px_rgba(0,246,255,0.5)]" />
            </motion.div>

            <h3
              className="text-xl font-bold mb-3 text-white tracking-wider group-hover:text-cyber-blue
                         transition-colors duration-300"
            >
              SELF_EXECUTING
            </h3>

            {/* <p className="text-gray-400 text-sm leading-relaxed">
              Autonomous smart contracts handle all operations. Set once and let AI optimize 24/7.
            </p> */}
          </div>

          {/* Telegram Interface */}
          <div className="text-center group">
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingAnimation}
              className="mb-6"
            >
              <FaTelegram className="text-cyber-blue text-6xl mx-auto filter drop-shadow-[0_0_8px_rgba(0,246,255,0.5)]" />
            </motion.div>

            <h3
              className="text-xl font-bold mb-3 text-white tracking-wider group-hover:text-cyber-blue
                         transition-colors duration-300"
            >
              TG_INTERFACE
            </h3>
            {/* 
            <p className="text-gray-400 text-sm leading-relaxed">
              Manage your entire staking portfolio through our intuitive Telegram bot interface.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

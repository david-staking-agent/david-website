import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-black/40 to-cyber-magenta/5 backdrop-blur-sm" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Content */}
          <div className="relative p-16 space-y-8">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-black flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-br from-cyber-blue to-cyber-magenta animate-pulse" />
            </div>

            <div className="space-y-6">
              <div className="terminal-text text-sm text-cyber-magenta text-center tracking-wider">
                SYSTEM_READY
              </div>

              <h2 className="text-3xl font-black mb-6 text-white text-center tracking-wider">
                INITIALIZE_STAKING_
              </h2>

              <p className="text-lg text-gray-400 mb-12 text-center tracking-wide">
                Unlock smarter staking with David on the Mode network—start today!
              </p>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cyber-border bg-black/50 px-16 py-4 text-cyber-blue
                         hover:bg-cyber-blue/10 transition-all duration-300
                         tracking-wider text-sm"
              >
                START_CHATTING
              </motion.button>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-cyber-blue to-transparent" />
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-cyber-blue to-transparent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-cyber-magenta to-transparent" />
          <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-cyber-magenta to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Cta;

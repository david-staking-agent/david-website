import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, stats }) => {
  return (
    <div
      className="cyber-border bg-black/50 backdrop-blur-sm p-8 relative group
                 hover:bg-cyber-blue/5 transition-all duration-500"
    >
      {/* Hover Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-blue to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyber-blue to-transparent" />
      </div>

      {/* Icon */}
      <div className="relative">
        <div className="text-4xl text-cyber-blue mb-6 relative z-10">{icon}</div>

        {/* Icon Background Glow */}
        <div className="absolute -top-2 -left-2 w-12 h-12 bg-cyber-blue/20 rounded-full blur-xl" />
      </div>

      {/* Content */}
      <h3
        className="text-lg font-bold mb-4 text-white tracking-wider group-hover:text-cyber-blue
                   transition-colors duration-300"
      >
        {title}
      </h3>

      <p className="text-gray-400 tracking-wide text-sm mb-6">{description}</p>

      {/* Stats */}
      {/* <div className="space-y-3 pt-4 border-t border-cyber-blue/20">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-mono">{stat.label}</span>
            <span className="text-cyber-blue font-mono">
              {stat.value}
            </span>
          </div>
        ))}
      </div> */}

      {/* Corner Accent */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-black flex items-center justify-center">
        <div className="w-2 h-2 bg-cyber-blue animate-pulse" />
      </div>
    </div>
  );
};

export default FeatureCard;

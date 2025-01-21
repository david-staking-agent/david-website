import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaEthereum, FaBitcoin } from "react-icons/fa";
import TypeWriter from "../components/TypeWriter";

const roadmapItems = [
  {
    phase: "PHASE_01",
    title: "Staking into LST/LRT",
    description:
      "Initial release featuring core LST and LRT staking with automated rebalancing for optimized returns.",
    status: "completed",
    icon: <FaRocket className="text-cyber-blue" />,
  },
  {
    phase: "PHASE_02",
    title: "AI, AA & TG chat integration",
    description:
      "AI-driven yield optimization with account abstraction and Telegram integration for a non-custodial, user-friendly staking experience",
    status: "completed",
    icon: <FaChartLine className="text-cyber-blue" />,
  },
  {
    phase: "PHASE_03",
    title: "LP Pool staking",
    description:
      "Algorithmic staking tailored for LP pools, delivering optimized strategies for the highest returns.",
    status: "in-progress",
    icon: <FaBitcoin className="text-cyber-blue" />,
  },
  {
    phase: "PHASE_04",
    title: "Multi-chain Support and Token Launch",
    description: "Expanding to multiple blockchain networks alongside the launch of David's token.",
    status: "upcoming",
    icon: <FaEthereum className="text-cyber-magenta" />,
  },
];

const Roadmap = () => {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-wider">
          SYSTEM_<span className="text-cyber-blue">ROADMAP</span>
        </h2>
        <div className="terminal-text text-sm text-center mb-20 text-gray-400">
          <TypeWriter text="EXECUTING_DEVELOPMENT_SEQUENCE" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="cyber-border bg-black/40 backdrop-blur-sm p-8 relative group
                       hover:bg-cyber-blue/5 transition-all duration-500"
            >
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black flex items-center justify-center">
                {item.icon}
              </div>

              <div
                className={`absolute top-0 right-0 w-2 h-2
                ${
                  item.status === "completed"
                    ? "bg-cyber-blue shadow-glow"
                    : item.status === "in-progress"
                    ? "bg-cyber-magenta"
                    : "bg-gray-800"
                }`}
              />

              <div className="text-xs text-cyber-blue mb-2 tracking-wider font-mono">
                {item.phase}
              </div>

              <h3
                className="text-xl font-bold mb-3 text-white tracking-wider group-hover:text-cyber-blue
                           transition-colors duration-300"
              >
                {item.title}
              </h3>

              <p className="text-gray-400 tracking-wide text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex items-center space-x-2">
                <div
                  className={`h-1 flex-grow ${
                    item.status === "completed"
                      ? "bg-cyber-blue"
                      : item.status === "in-progress"
                      ? "bg-cyber-magenta"
                      : "bg-gray-800"
                  }`}
                />
                <span className="text-xs tracking-wider font-mono text-gray-500">
                  {item.status === "completed"
                    ? "100%"
                    : item.status === "in-progress"
                    ? "45%"
                    : "0%"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

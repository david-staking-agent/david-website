import { FaBrain, FaShieldAlt, FaNetworkWired } from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Driven Insights",
    description:
      "David uses financial LLMs to analyze market trends and uncover the best staking opportunities. Also ensuring a balance between risks and returns",
    stats: [
      { label: "PROCESSING_POWER", value: "1.21 TFLOPS" },
      { label: "ACCURACY_RATE", value: "99.99%" },
      { label: "RESPONSE_TIME", value: "<1ms" },
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: "Yield Optimization",
    description:
      "David monitors the markets around the clock to automatically identify and rebalance into the highest-yielding staking options.",
    stats: [
      { label: "SECURITY_LEVEL", value: "LEVEL_9" },
      { label: "THREAT_DETECTION", value: "REAL-TIME" },
      { label: "UPTIME", value: "99.999%" },
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Self Custodial",
    description:
      "Security is built into the design of David, with account abstraction at its core, ensuring users have full control and independence over their assets",
    stats: [
      { label: "NETWORKS", value: "42+" },
      { label: "VALIDATORS", value: "1000+" },
      { label: "LATENCY", value: "0.1ms" },
    ],
  },
];

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            stats={feature.stats}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

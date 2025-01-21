import { motion } from "framer-motion";
import FaqItem from "../components/FaqItem";
import TypeWriter from "../components/TypeWriter";

const faqItems = [
  {
    question: "What is David?",
    answer:
      "David is a self-custodial staking agent that helps you manage your crypto assets across various staking protocols like EtherFi, Renzo, Kelp DAO, Ethena, and StakeStone. It operates through a Telegram chat interface, making staking as simple as sending a message.",
  },
  {
    question: "How does David ensure the security of my funds?",
    answer:
      "David uses account abstraction technology for self-custodial behavior. You maintain full control of your funds at all times. David only receives limited permissions through time-limited session keys that you explicitly approve, and these permissions are restricted to specific approved protocols.",
  },
  {
    question: "What are David's fees?",
    answer:
      "David charges a nominal fee of 0.1% only at unstaking events. There are no hidden charges or ongoing management fees. All transaction fees (gas fees) are sponsored, making David 100% gasless for users.",
  },
  {
    question: "What staking protocols does David support?",
    answer:
      "David currently supports staking across EtherFi, Renzo, Kelp DAO, Ethena, and StakeStone.",
  },
  {
    question: "How can I interact with David?",
    answer:
      "You can interact with David through its Telegram chat interface. Simply message David to start staking, check your positions, or initiate withdrawals. The interface is designed to be user-friendly and accessible 24/7.",
  },
  {
    question: "How can I monitor my investments?",
    answer:
      "You can check your smart account directly to view your funds at any time. Additionally, David is developing a comprehensive performance dashboard that will provide detailed insights into your staking positions and returns.",
  },
  {
    question: "What happens if I want to withdraw my funds?",
    answer:
      "You retain full withdrawal rights at all times. David's permissions are limited to executing approved strategies, and you can withdraw your funds whenever you want",
  },
  {
    question: "How does the session key system work?",
    answer:
      "When you want to use David's services, you'll be asked to sign time-limited session keys aka Authorize David. These keys give David specific, limited permissions to execute strategies on your behalf",
  },
  {
    question: "Are there any gas fees involved?",
    answer:
      "No. David is 100% gasless for users. All transaction fees are sponsored, meaning you don't need to worry about having ETH for gas fees when executing transactions.",
  },
  {
    question: "What makes David different from other staking services?",
    answer:
      "David combines several unique features:\n- Self-custodial security through account abstraction\n- Telegram-based interface for ease of use\n- Multi-protocol staking capabilities\n- Gasless transactions\n- Time-limited permissions system\n- No lock-up periods beyond protocol requirements",
  },
];

const Faq = () => {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-4 tracking-wider">
          SYSTEM_<span className="text-cyber-blue">FAQ</span>
        </h2>
        <div className="terminal-text text-sm text-center mb-20 text-gray-400">
          <TypeWriter text="LOADING_KNOWLEDGE_BASE" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;

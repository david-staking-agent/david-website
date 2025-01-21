import {
  FaServer,
  FaLock,
  FaCode,
  FaDatabase,
  FaPhone,
  FaMobile,
  FaAward,
  FaLink,
} from "react-icons/fa";

const TechCollage = () => {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Tech Stack */}
        <div className="space-y-8">
          <div className="cyber-border bg-black/50 backdrop-blur-sm p-8 hover:bg-cyber-blue/5 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 tracking-wider text-cyber-blue">
              COMBINATION OF
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaServer className="text-cyber-blue text-xl" />
                <span className="text-gray-400 font-mono text-sm">Financial LLM's</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaLock className="text-cyber-magenta text-xl" />
                <span className="text-gray-400 font-mono text-sm">Account Abstraction</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaLink className="text-cyber-blue text-xl" />
                <span className="text-gray-400 font-mono text-sm">Unified Staking</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMobile className="text-cyber-magenta text-xl" />
                <span className="text-gray-400 font-mono text-sm">Telegram Interface</span>
              </div>
            </div>
          </div>

          <div className="cyber-border bg-black/50 backdrop-blur-sm p-8 hover:bg-cyber-blue/5 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 tracking-wider text-cyber-blue">PERFORMANCE</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400 font-mono text-sm">Response Time</span>
                  <span className="text-cyber-blue font-mono text-sm">{`< 2s`}</span>
                </div>
                <div className="h-1 bg-black rounded">
                  <div className="h-full w-[95%] bg-cyber-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Strategy */}
        <div className="cyber-border bg-black/50 backdrop-blur-sm p-8 hover:bg-cyber-blue/5 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-6 tracking-wider text-cyber-blue">
            HOW_TO_GET_STARTED
          </h3>
          <div className="space-y-6">
            <div className="relative p-4 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black">
                <div className="w-2 h-2 bg-cyber-blue animate-pulse" />
              </div>
              <h4 className="text-cyber-blue font-mono mb-2">Connect via Telegram</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Start your staking journey by simply connecting with David through Telegram. Our
                chat interface makes it as easy as messaging a friend - no complex dashboards or
                confusing interfaces.
              </p>
            </div>

            <div className="relative p-4 border border-cyber-magenta/20 hover:border-cyber-magenta/40 transition-colors duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black">
                <div className="w-2 h-2 bg-cyber-magenta animate-pulse" />
              </div>
              <h4 className="text-cyber-magenta font-mono mb-2">Set Up Your Smart Account</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                David creates a secure, self-custodial smart account for you using account
                abstraction technology. This ensures you maintain full control of your funds while
                enabling gasless transactions.
              </p>
            </div>

            <div className="relative p-4 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black">
                <div className="w-2 h-2 bg-cyber-blue animate-pulse" />
              </div>
              <h4 className="text-cyber-blue font-mono mb-2">Authorize Secure Access</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Grant David limited permissions through time-limited session keys to manage your
                funds across selected protocols. You maintain complete control with exclusive
                withdrawal rights, while David handles the automated staking strategies.
              </p>
            </div>

            <div className="relative p-4 border border-cyber-magenta/20 hover:border-cyber-magenta/40 transition-colors duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-black">
                <div className="w-2 h-2 bg-cyber-magenta animate-pulse" />
              </div>
              <h4 className="text-cyber-magenta font-mono mb-2">Fund & Start Staking</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Add your tokens to your smart account, return to Telegram, and start chatting with
                David to begin your staking journey. It's that simple - no gas fees, no complex
                interfaces, just effortless staking through conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCollage;

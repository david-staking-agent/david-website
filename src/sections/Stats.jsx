import StatsCard from "../components/StatsCard";

const Stats = () => {
  return (
    <section className="container mx-auto px-4 py-32">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <StatsCard value="5+" label="STAKING_PROTOCOLS" color="blue" />
        <StatsCard value="$20K+" label="TVL_LOCKED" color="magenta" />
        <StatsCard value="9.8%" label="AVERAGE_APY" color="blue" />
      </div>
    </section>
  );
};

export default Stats;

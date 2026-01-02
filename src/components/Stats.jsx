const Stats = () => {
  return (
    <section className="px-16 py-24">
      <div className="glass p-12 grid grid-cols-4 text-center">
        <Stat value="10K+" label="Tasks Created" />
        <Stat value="99.9%" label="Uptime" />
        <Stat value="100%" label="Client Side" />
        <Stat value="24/7" label="Availability" />
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <p className="text-4xl font-bold text-cyan-400">{value}</p>
    <p className="text-white/60 mt-2">{label}</p>
  </div>
);

export default Stats;

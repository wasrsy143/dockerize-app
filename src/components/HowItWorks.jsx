const steps = [
  "Create an account",
  "Add your tasks",
  "Track progress",
  "Stay productive",
];

const HowItWorks = () => {
  return (
    <section className="px-16 py-24 bg-black/30">
      <h2 className="text-4xl font-bold text-center mb-14">
        How It <span className="text-cyan-400">Works</span>
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="glass p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-3">
              {i + 1}
            </div>
            <p className="font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

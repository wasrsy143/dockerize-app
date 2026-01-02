const features = [
  {
    title: "Fast CRUD Operations",
    desc: "Create, update, and manage tasks instantly with smooth UI.",
    icon: "⚡",
  },
  {
    title: "Crypto-Inspired Design",
    desc: "Glassmorphism UI inspired by modern blockchain dashboards.",
    icon: "💎",
  },
  {
    title: "Secure & Private",
    desc: "Your data stays in your browser. No tracking. No servers.",
    icon: "🔐",
  },
];

const Features = () => {
  return (
    <section className="px-16 py-24">
      <h2 className="text-4xl font-bold text-center mb-14">
        Why Choose <span className="text-cyan-400">CryptoCRUD</span>
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="glass p-8 hover:scale-[1.02] transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-white/60">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

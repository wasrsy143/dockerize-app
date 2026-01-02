import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="px-16 py-24 text-center">
      <div className="glass p-16">
        <h2 className="text-4xl font-bold mb-6">
          Ready to boost your productivity?
        </h2>

        <p className="text-white/60 mb-10 max-w-xl mx-auto">
          Start managing your tasks with a modern, crypto-inspired
          dashboard experience.
        </p>

        <Link
          to="/register"
          className="inline-block px-10 py-4 rounded-xl
          bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
};

export default CTA;

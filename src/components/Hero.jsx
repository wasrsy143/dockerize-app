const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-16">
      {/* LEFT */}
      <div className="max-w-xl z-10">
        <span className="inline-block mb-4 rounded-full px-4 py-1 text-sm
          bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          Next Gen Data Management
        </span>

        <h1 className="text-6xl font-extrabold leading-tight">
          Manage Your Data
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            With Ease
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/60">
          Secure, fast and beautifully designed CRUD system
          inspired by modern crypto dashboards.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="glow-btn rounded-xl px-8 py-4 font-semibold">
            Get Started
          </button>

          <button className="rounded-xl px-8 py-4 border border-white/20">
            How It Works
          </button>
        </div>
      </div>

      {/* RIGHT MOCK DASHBOARD */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[520px] glass p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="glass p-4">
            <p className="text-white/60 text-sm">Total Tasks</p>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="glass p-4">
            <p className="text-white/60 text-sm">Completed</p>
            <p className="text-2xl font-bold text-green-400">18</p>
          </div>
        </div>

        <div className="glass p-4 h-40 flex items-center justify-center text-white/40">
          Chart Preview
        </div>
      </div>
    </section>
  );
};

export default Hero;

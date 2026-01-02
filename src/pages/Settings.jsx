import { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );
  const user = localStorage.getItem("user");

  return (
    <div className="glass p-8 max-w-3xl text-white">
      <h2 className="text-2xl font-bold mb-8">Settings</h2>

      {/* PROFILE */}
      <div className="mb-10">
        <h3 className="font-semibold mb-4">Profile</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="bg-black/40 rounded-lg p-3 outline-none"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem("name", e.target.value);
            }}
          />
          <input
            className="bg-black/40 rounded-lg p-3 opacity-60"
            value={user}
            disabled
          />
        </div>
      </div>

      {/* PREFERENCES */}
      <div className="mb-10">
        <h3 className="font-semibold mb-4">Preferences</h3>
        <div className="glass p-4 flex justify-between">
          <span>Theme</span>
          <span className="text-cyan-400">Dark (Default)</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-12">
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          Cancel
        </Link>

        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition"
        >
          Update
        </Link>
      </div>

      {/* DANGER */}
      <div>
        <h3 className="font-semibold mb-4 text-red-400">
          Danger Zone
        </h3>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          className="bg-red-500/20 text-red-400 px-6 py-3 rounded-lg hover:bg-red-500/30 transition"
        >
          Logout & Clear Data
        </button>
      </div>
    </div>
  );
};

export default Settings;

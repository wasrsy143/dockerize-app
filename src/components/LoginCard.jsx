import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", email);
    navigate("/dashboard");
  };

  return (
    <div className="glass w-[380px] p-8">
      <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
      <p className="text-white/50 mb-6">
        Sign in to access your dashboard
      </p>

      <input
        className="w-full mb-4 rounded-lg bg-black/40 p-3 outline-none"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full mb-6 rounded-lg bg-black/40 p-3 outline-none"
        placeholder="Password"
      />

      <button
        onClick={login}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold"
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginCard;

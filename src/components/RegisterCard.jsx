import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterCard = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const register = () => {
    localStorage.setItem("user", email);
    navigate("/dashboard");
  };

  return (
    <div className="glass w-[380px] p-8">
      <h2 className="text-2xl font-bold mb-1">Create Account</h2>
      <p className="text-white/50 mb-6">
        Sign up to get started
      </p>

      <input
        className="w-full mb-4 rounded-lg bg-black/40 p-3 outline-none"
        placeholder="Full Name"
      />

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
        onClick={register}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold"
      >
        Create Account
      </button>
    </div>
  );
};

export default RegisterCard;

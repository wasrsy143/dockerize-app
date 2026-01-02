import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <h1 className="text-xl font-bold">CryptoCRUD</h1>

      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-gray-300 hover:text-white">
          Sign In
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CrudTable from "./CrudTable";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const highPriority = tasks.filter(t => t.priority === "High").length;
  const overdue = tasks.filter(
    t => t.dueDate && new Date(t.dueDate) < new Date()
  ).length;

  return (
    <div className="flex min-h-screen text-white">
      {/* SIDEBAR */}
      <aside className="w-72 p-6 glass">
        {/* LOGO → LANDING PAGE */}
        <Link to="/" className="block mb-10">
          <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer hover:opacity-80">
            CryptoCRUD
          </h1>
        </Link>

        <nav className="space-y-3 text-white/70">
          <Link
            to="/dashboard"
            className={`block px-4 py-3 rounded-lg ${
              location.pathname === "/dashboard"
                ? "glass text-white font-semibold"
                : "hover:text-white"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/settings"
            className={`block px-4 py-3 rounded-lg ${
              location.pathname === "/settings"
                ? "glass text-white font-semibold"
                : "hover:text-white"
            }`}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-10">Overview</h2>

        {/* STATS */}
        <div className="grid grid-cols-5 gap-6 mb-10">
          <Stat title="Total Tasks" value={total} />
          <Stat title="Completed" value={completed} />
          <Stat title="In Progress" value={inProgress} />
          <Stat title="High Priority" value={highPriority} />
          <Stat title="Overdue" value={overdue} />
        </div>

        {/* TASK TABLE */}
        <CrudTable tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="glass p-6 rounded-xl">
    <p className="text-white/60">{title}</p>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default Dashboard;

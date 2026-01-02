import { useState } from "react";
import AddEditModal from "./AddEditModal";

const CrudTable = ({ tasks, setTasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const saveTask = (task) => {
    const exists = tasks.find((t) => t.id === task.id);
    const updated = exists
      ? tasks.map((t) => (t.id === task.id ? task : t))
      : [...tasks, task];

    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="glass p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Tasks</h2>
        <button
          onClick={() => {
            setSelectedTask(null);
            setIsOpen(true);
          }}
          className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2"
        >
          + Add New Task
        </button>
      </div>

      {tasks.length === 0 && (
        <p className="text-white/40">No tasks yet</p>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center border-b border-white/10 py-4"
        >
          <div>
            <p className="font-semibold">{task.name}</p>
            <p className="text-sm text-white/50">
              {task.assignee || "Unassigned"} • Due {task.dueDate || "N/A"}
            </p>

            <div className="flex gap-2 mt-1">
              <span className={`text-xs px-2 py-1 rounded-full
                ${task.status === "Completed"
                  ? "text-green-400 bg-green-400/10"
                  : task.status === "In Progress"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-yellow-400 bg-yellow-400/10"}
              `}>
                {task.status}
              </span>

              <span className={`text-xs px-2 py-1 rounded-full
                ${task.priority === "High"
                  ? "text-red-400 bg-red-400/10"
                  : task.priority === "Medium"
                  ? "text-orange-400 bg-orange-400/10"
                  : "text-green-400 bg-green-400/10"}
              `}>
                {task.priority}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setSelectedTask(task);
                setIsOpen(true);
              }}
              className="text-cyan-400"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <AddEditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={saveTask}
        task={selectedTask}
      />
    </div>
  );
};

export default CrudTable;

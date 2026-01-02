import { useState, useEffect } from "react";

const AddEditModal = ({ isOpen, onClose, onSave, task }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setName(task.name);
      setStatus(task.status);
      setPriority(task.priority);
      setAssignee(task.assignee);
      setDueDate(task.dueDate);
    } else {
      setName("");
      setStatus("Pending");
      setPriority("Medium");
      setAssignee("");
      setDueDate("");
    }
  }, [task]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSave({
      ...task,
      id: task?.id || Date.now(),
      name,
      status,
      priority,
      assignee,
      dueDate,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="glass w-[420px] p-6">
        <h2 className="text-xl font-bold mb-6">
          {task ? "Edit Task" : "Add New Task"}
        </h2>

        <input
          className="w-full mb-3 rounded-lg bg-black/40 p-3 outline-none"
          placeholder="Task title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mb-3 rounded-lg bg-black/40 p-3 outline-none"
          placeholder="Assignee (staff name)"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-3 mb-3">
          <select
            className="rounded-lg bg-black/40 p-3 outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select
            className="rounded-lg bg-black/40 p-3 outline-none"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <input
          type="date"
          className="w-full mb-6 rounded-lg bg-black/40 p-3 outline-none"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-white/60">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 font-semibold"
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;

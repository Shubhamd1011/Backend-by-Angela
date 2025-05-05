import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const API_URL = "http://localhost:3001/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [dark, setDark] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => toast.error("Failed to load users"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editId === null) {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        const newUser = await res.json();
        setUsers([...users, newUser]);
        toast.success("User added!");
      } else {
        const res = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        const updated = await res.json();
        setUsers(users.map((u) => (u.id === editId ? updated : u)));
        toast.success("User updated!");
      }

      setName("");
      setEditId(null);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setUsers(users.filter((u) => u.id !== id));
      toast.success("User deleted!");
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <Toaster position="top-right" />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 dark:text-white rounded-2xl p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center">👤 User Manager</h1>
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition"
            type="submit"
          >
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <ul className="space-y-3">
          {users.map((user) => (
            <motion.li
              key={user.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl flex justify-between items-center shadow"
            >
              <span className="text-lg font-medium">{user.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Edit2, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  // Dummy task data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish project report',
      description: 'Complete the final report for the client project',
      dueDate: '2025-08-25',
      priority: 'High',
      completed: false,
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Discuss project milestones and deadlines',
      dueDate: '2025-08-22',
      priority: 'Medium',
      completed: true,
    },
    {
      id: 3,
      title: 'Code review',
      description: 'Review PRs submitted by team members',
      dueDate: '2025-08-23',
      priority: 'Low',
      completed: false,
    },
  ]);

  // Action handlers
  const handleDelete = id => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleMarkDone = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = id => {
    alert(`Edit task with ID: ${id} (Integration with modal/form later)`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Task Dashboard
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-indigo-100 text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Due Date</th>
                  <th className="py-3 px-4 text-left">Priority</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr
                    key={task.id}
                    className={`border-t border-gray-200 ${
                      task.completed
                        ? 'bg-green-50 line-through text-gray-400'
                        : ''
                    }`}>
                    <td className="py-3 px-4">{task.title}</td>
                    <td className="py-3 px-4">{task.description}</td>
                    <td className="py-3 px-4">{task.dueDate}</td>
                    <td className="py-3 px-4">{task.priority}</td>
                    <td className="py-3 px-4">
                      {task.completed ? (
                        <span className="text-green-600 font-semibold">
                          Completed
                        </span>
                      ) : (
                        <span className="text-yellow-600 font-semibold">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 flex justify-center gap-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleEdit(task.id)}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                        <Edit2 size={16} />
                      </motion.button>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(task.id)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                        <Trash2 size={16} />
                      </motion.button>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleMarkDone(task.id)}
                        className={`p-2 rounded-lg ${
                          task.completed
                            ? 'bg-gray-400 text-white hover:bg-gray-500'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}>
                        <CheckCircle size={16} />
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

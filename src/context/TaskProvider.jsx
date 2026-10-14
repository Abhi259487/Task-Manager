import { useContext, useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const updateTask = (id, task) => {
    setTasks((prev) =>
      prev.map((currTask) => {
        return currTask.id === id ? task : currTask;
      }),
    );
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((currTask) =>
        currTask.id === id
          ? { ...currTask, completed: !currTask.completed }
          : currTask,
      ),
    );
  };

  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);

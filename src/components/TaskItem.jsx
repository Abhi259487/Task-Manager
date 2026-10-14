import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskProvider";

function TaskItem({ task }) {
  const [taskMsg, setTaskMsg] = useState(task.task);
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const { deleteTask, updateTask, toggleComplete } = useTaskContext();

  const toggleCompleted = () => {
    toggleComplete(task.id);
  };

  const editTask = () => {
    let trimTask = taskMsg.trim();
    if (trimTask === "") return;

    updateTask(task.id, { ...task, task: taskMsg });
    setIsTaskEditable(false);
  };

  return (
    <div className="flex items-center w-full gap-2 text-black">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
        className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isTaskEditable}
      />
      <input
        type="text"
        value={taskMsg}
        onChange={(e) => setTaskMsg(e.target.value)}
        className={`flex-1 border outline-none w-full bg-transparent rounded-lg ${
          isTaskEditable ? "border-black/10 px-2" : "border-transparent"
        } ${task.completed ? "line-through" : ""}`}
        readOnly={!isTaskEditable}
      />
      <button
        onClick={() => {
          if (task.completed) {
            return;
          }
          if (isTaskEditable) {
            editTask();
          } else {
            setIsTaskEditable((prev) => !prev);
          }
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        disabled={task.completed}
      >
        {isTaskEditable ? "📁" : "✏️"}
      </button>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
}

export default TaskItem;

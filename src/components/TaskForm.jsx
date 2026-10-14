import { useState } from "react";
import { useTaskContext } from "../context/TaskProvider";

function TaskForm() {
  const [inputValue, setInputValue] = useState("");
  const { addTask } = useTaskContext();

  const add = (e) => {
    e.preventDefault();
    let input = inputValue.trim();
    if (input === "") {
      return;
    }
    addTask({ task: input, completed: false });
    setInputValue("");
  };
  return (
    
       <div>
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Tasks
        </h1>
        <div className="mb-4">
          <form className="flex" onSubmit={add}>
            <input
              type="text"
              value={inputValue}
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    
  );
}

export default TaskForm;

import { useTaskContext } from "../context/TaskProvider";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useTaskContext();
  return (
    <div className="flex flex-wrap gap-y-3 ">
      {tasks.map((task) => (
        <div key={task.id} className={`w-full rounded-lg p-3 border border-white/10 ${task.completed ? "bg-green-300" : "bg-amber-50"}`}>
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;

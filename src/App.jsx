import { TaskContextProvider } from "./context/TaskProvider";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskContextProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;

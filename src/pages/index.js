import { useState } from "react";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  }

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  function onDeleteItem() {
    setTasks([]);
  }

  return (
    <main className={rubik.className}>
      <div className="w-full h-auto px-6 md:px-20 lg:px-56 py-10 md:py-20">
        <div className="bg-white w-full min-h-[80vh] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.1)] borde-4 border-gray-400 rounded-[32px] p-4 md:p-8 lg:py-16 lg:px-40 flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-[#11175e] min-[320px]:mt-5 text-2xl md:text-3xl md:mt-5 sm:mt-4 lg:text-[39px] font-bold">
              Daily To Do List
            </h1>
            <TaskInput onAdd={addTask} />

            <TaskList tasks={tasks} onToggle={toggleTaskCompletion} />
          </div>
          <Footer onDeleteAll={onDeleteItem} taskCount={tasks.length} />
        </div>
      </div>
    </main>
  );
}

import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  }
  return (
    <div className="flex border p-2 md:p-[6px] justify-between gap-2 rounded-md border-gray-200">
      <input
        type="text"
        placeholder="Add new list item"
        className="pl-2 md:pl-4 w-full text-sm md:text-base text-gray-700"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-[#2d6ffc] py-2 px-4 md:px-6 rounded-md text-white text-sm md:text-[16px]"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

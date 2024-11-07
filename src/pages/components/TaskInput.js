import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [task, setTask] = useState("");
  const [input, emptyInput] = useState(false);

  function handleAdd() {
    if (task.length === 0) {
      emptyInput(true);
    }
    if (task.trim()) {
      onAdd(task);
      setTask("");
      emptyInput(false);
    }
  }
  return (
    <>
      <div className="flex border p-2 md:p-[6px] justify-between gap-2 rounded-md border-gray-200">
        <input
          type="text"
          placeholder="Add new list item"
          className="pl-2 md:pl-4 w-full text-sm md:text-base text-gray-700"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-[#2d6ffc] hover:bg-blue-300 hover:shadow-[inset_0px_0px_22px_1px_#228be6] py-2 px-4 md:px-6 rounded-md text-white text-sm md:text-[16px]"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      {input && (
        <p className="text-red-500 font-medium pl-5">Task cannot be empty.</p>
      )}
    </>
  );
}

export default TaskInput;

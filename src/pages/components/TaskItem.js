import Image from "next/image";
import React from "react";

const TaskItem = ({ task, onToggle }) => {
  if (!task || typeof task.completed === "undefined") {
    return null; // or display a fallback UI
  }

  return (
    <div
      className={`flex items-center p-2 rounded gap-2 ${
        task.completed ? "bg-gray-300" : "bg-white"
      }`}
      onClick={() => onToggle(task.id)}
    >
      <div
        className={`rounded-full w-6 h-6 md:w-[32px] md:h-[32px] ml-2 ${
          task.completed
            ? "bg-[#00D8A7] flex justify-center items-center"
            : "border border-gray-300"
        }`}
      >
        <Image
          src="/check.png"
          width={16}
          height={16}
          alt="Checkmark"
          className={`${
            task.completed ? "w-4 h-4 md:w-[16px] md:h-[16px]" : "hidden"
          }`}
        />
      </div>
      <span
        className={`ml-2 text-sm md:text-[16px] font-medium ${
          task.completed
            ? "line-through text-[#8F98A8] tracking-wider"
            : "text-[#001747] tracking-wider hover:text-[#2D70FD]"
        }`}
      >
        {task.name}
      </span>
    </div>
  );
};

export default TaskItem;

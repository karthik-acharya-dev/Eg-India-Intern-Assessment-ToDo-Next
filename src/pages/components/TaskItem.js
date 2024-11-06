import Image from "next/image";
import React from "react";

const TaskItem = ({ task, onToggle }) => {
  return (
    <div
      className={`flex items-center p-2 rounded gap-2 ${
        task.completed ?? "bg-gray-300 "
      }`}
      onClick={() => onToggle(task.id)}
    >
      {/* <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="form-checkbox rounded-full h-5 w-5 text-green-500 bg-green-500 border-none"
      /> */}
      <div
        className={` rounded-full w-[32px] h-[32px] ml-2 ${
          task.completed
            ? "bg-[#00D8A7] flex justify-center items-center"
            : "border-[1px]"
        } `}
      >
        <Image
          src="/check.png"
          width={16}
          height={16}
          alt="Picture of the author"
          className={` ${task.completed ? "w-[16px] h-[16px]" : "hidden"} `}
        />
      </div>
      <span
        className={`ml-2 ${
          task.completed
            ? "line-through text-[#8F98A8] tracking-wider font-medium text-[16px]"
            : "text-[#001747] tracking-wider hover:text-[#2D70FD] font-medium text-[16px]"
        }`}
      >
        {task.name}
      </span>
    </div>
  );
};

export default TaskItem;

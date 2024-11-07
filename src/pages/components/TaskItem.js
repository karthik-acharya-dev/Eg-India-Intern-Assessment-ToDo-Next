import Image from "next/image";
import React, { useState } from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task?.name || "");

  if (!task) return null; // Render nothing if task is undefined

  const handleEdit = () => {
    if (isEditing && editedTask.trim()) {
      onEdit(task.id, editedTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center p-2 rounded gap-2 justify-between">
      <div
        className="flex items-center gap-2"
        onClick={() => {
          if (!isEditing) {
            onToggle(task.id);
          }
        }}
      >
        <div
          className={`rounded-full w-[32px] h-[32px] ml-2 ${
            task.completed
              ? "bg-[#00D8A7] flex justify-center items-center"
              : "border-[1.5px]"
          }`}
        >
          <Image
            src="/check.png"
            width={16}
            height={16}
            alt="Completed check"
            className={task.completed ? "w-[16px] h-[16px]" : "hidden"}
          />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="border-b outline-none"
          />
        ) : (
          <span
            className={`ml-2 ${
              task.completed
                ? "line-through text-[#8F98A8] tracking-wider font-medium text-[16px]"
                : "text-[#001747] tracking-wider hover:text-[#2D70FD] font-medium text-[16px]"
            }`}
          >
            {task.name}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleEdit} className="text-blue-500">
            Done
          </button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>
              <Image
                src="/circle.png"
                width={20}
                height={20}
                alt="Edit"
                className="shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] rounded-full"
              />
            </button>
            <button onClick={() => onDelete(task.id)}>
              <Image
                src="/remove.png"
                width={20}
                height={20}
                alt="Delete"
                className="shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] rounded-full"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;

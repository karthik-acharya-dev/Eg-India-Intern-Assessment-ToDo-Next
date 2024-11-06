import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="w-full">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;

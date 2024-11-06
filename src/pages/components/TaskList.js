import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="w-full space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task.completed} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;

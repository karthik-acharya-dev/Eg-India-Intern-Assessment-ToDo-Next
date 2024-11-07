import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="w-full">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TaskList;

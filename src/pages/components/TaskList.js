import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div className="w-full">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="text-center">No tasks yet.</p>
      )}
    </div>
  );
};

export default TaskList;

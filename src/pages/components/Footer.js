import React from "react";

function Footer({ taskCount, onDeleteAll }) {
  const s = taskCount > 1;
  return (
    <div className="border-t-[1px] border-gray-200 w-full h-5 flex justify-between p-5">
      <span className="text-gray-400">
        {taskCount} item{s && "s"}
      </span>
      <span className="text-gray-400 hover:text-gray-500">
        <button onClick={onDeleteAll}>Clear All</button>
      </span>
    </div>
  );
}

export default Footer;

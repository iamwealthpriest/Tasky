import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, checkTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          checkTask={checkTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

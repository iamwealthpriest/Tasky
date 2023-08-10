import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const getStorage =
    localStorage.getItem("tasks") === null
      ? []
      : JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(getStorage);
  const [completed, setCompleted] = useState(false);

  const addNewTask = (name) => {
    if (!name) throw Error("No input added");
    const id = Math.floor(Math.random() * 1000);
    const task = { name, id, completed };
    let storageTasks = [...tasks, task];
    setTasks(storageTasks);
    localStorage.setItem("tasks", JSON.stringify(storageTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const checkTask = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };
  return (
    <div className="App">
      <TaskForm addNewTask={addNewTask} tasks={tasks} />
      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          deleteTask={deleteTask}
          checkTask={checkTask}
        />
      )}
    </div>
  );
}

export default App;

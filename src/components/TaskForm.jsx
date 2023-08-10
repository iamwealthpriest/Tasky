import React, { useState } from "react";

const TaskForm = ({ addNewTask }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addNewTask(value);
      setValue("");
    } catch (error) {
      setError(error.message);
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to Tasky! </h1>
      {/* <br></br><span>Simplify your Productivity with Tasky</span>  */}
      <h4 id="subtitle" >Simplify your productivity with Tasky </h4>
      <input  className="input"
        type="text"
        value={value}
        placeholder="Enter a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add new task</button>
      {showError && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;

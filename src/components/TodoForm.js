import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted:", task);
    if (task) {
      addTodo(task);
      setTask("");
    }

  };
    const handleChange = (e) => {
        setTask(e.target.value);
    };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="What is the task today?" value={task} onChange={handleChange} />
      <button type="submit" className="addBtn">Add Task</button>
    </form>
  );
}
export default TodoForm;

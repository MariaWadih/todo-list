import React from "react";
import { useState } from "react";

function EditTodoForm({ editTodo, currentTask }) {
  const [task, setTask] = useState(currentTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task submitted:", task);
    if (task) {
      editTodo(task);
      setTask("");
    }

  };
    const handleChange = (e) => {
        setTask(e.target.value);
    };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Update Task" value={task} onChange={handleChange} />
      <button type="submit" className="addBtn">Edit Task</button>
    </form>
  );
}
export default EditTodoForm;

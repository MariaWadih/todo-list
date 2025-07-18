import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({todo,toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className="todo">
      <p className={`todo-task ${todo.completed ? "completed" : ""}`} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
      <div className="todo-icons">
        <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '10px' }} onClick={() => editTodo(todo.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>

  );
}

export default Todo;

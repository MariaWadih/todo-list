import React, {useState} from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
uuidv4();


function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo , completed: false , isEditing: false }]);
    };
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };  
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const editTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };
    const editTask = (id, newTask) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo
        ));
    };
  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
             <EditTodoForm editTodo={(newTask) => editTask(todo.id, newTask)} currentTask={todo.task} key={todo.id} />
            ) : (
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
        ))}
    </div>
  );
}

export default TodoWrapper;
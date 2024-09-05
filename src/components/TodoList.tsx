import React from "react";
import "./TodoList.css";

type TodoListProps = {
  items: { id: number; text: string }[];
  handleDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = function ({ items, handleDelete }) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

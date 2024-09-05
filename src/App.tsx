import React, { useState } from "react";
import TodoList from "./components/TodoList.tsx";
import NewTodo from "./components/NewTodo.tsx";
type Todo = {
  id: number;
  text: string;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(text: string) {
    setTodos((todos) => [...todos, { id: Math.random() * 100, text }]);
  }

  function handleDelete(id: number) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList items={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

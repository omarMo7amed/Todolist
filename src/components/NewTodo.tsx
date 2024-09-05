import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  handleAddTodo: (todo: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = function ({ handleAddTodo }) {
  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ref.current!.value) {
      const enteredTodo = ref.current!.value;
      handleAddTodo(enteredTodo);
    }
  }

  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo List</label>
        <input type="text" id="todo-text" ref={ref} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;

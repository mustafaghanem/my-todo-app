import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Type your daily tasks here..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="sumbit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

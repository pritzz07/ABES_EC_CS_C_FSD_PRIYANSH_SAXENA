import React, { useState } from "react";

const InputTodo = ({ inputHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;
    inputHandler(inputValue);
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        placeholder="Enter a task..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default InputTodo;

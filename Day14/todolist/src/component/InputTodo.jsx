import { useState, useEffect } from "react";

const InputTodo = ({ inputHandler, editValue }) => {
  const [inputValue, setInputValue] = useState("");

 
  useEffect(() => {
    setInputValue(editValue);
  }, [editValue]);

  const addOrUpdateTask = () => {
    if (inputValue.trim() === "") return;
    inputHandler(inputValue);
    setInputValue(""); 
  };

  return (
    <div className="input-container">
      <input
        id="todo-input"
        type="text"
        className="todo-input"
        placeholder="Enter a task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="add-btn" onClick={addOrUpdateTask}>
        {editValue ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default InputTodo;

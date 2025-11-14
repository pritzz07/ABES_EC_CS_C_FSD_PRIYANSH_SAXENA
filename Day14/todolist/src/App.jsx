import { useState } from "react";
import InputTodo from "./component/InputTodo";
import "./App.css"; // ⭐ add this

function App() {
  const [todoList, setTodoList] = useState([]);

  const inputHandler = (inputVal) => {
    setTodoList([...todoList, inputVal]);
  };

  const deleteHandler = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="app-container">
      <h2 className="title">TODO LIST</h2>

      <div className="todo-items">
        {todoList.map((data, index) => (
          <div className="todo-item" key={index}>
            <span>{data}</span>
            <button className="delete-btn" onClick={() => deleteHandler(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <InputTodo inputHandler={inputHandler} />
    </div>
  );
}

export default App;

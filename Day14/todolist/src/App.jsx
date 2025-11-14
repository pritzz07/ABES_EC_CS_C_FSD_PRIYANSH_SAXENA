import { useState } from "react";
import InputTodo from "./component/InputTodo";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const inputHandler = (inputVal) => {
    if (editIndex === null) {
      
      setTodoList([...todoList, inputVal]);
    } else {
      
      const updatedList = [...todoList];
      updatedList[editIndex] = inputVal;
      setTodoList(updatedList);
      setEditIndex(null); 
    }
  };

 
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  // EDIT TASK - send value to InputTodo
  const editHandler = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="app-container">
      <h2 className="title">TODO LIST</h2>

      <div className="todo-items">
        {todoList.map((data, index) => (
          <div className="todo-item" key={index}>
            <span>{data}</span>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                style={{
                  background: "#0099ff",
                  color: "white",
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => editHandler(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteHandler(index)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <InputTodo
        inputHandler={inputHandler}
        editValue={editIndex !== null ? todoList[editIndex] : ""}
      />
    </div>
  );
}

export default App;

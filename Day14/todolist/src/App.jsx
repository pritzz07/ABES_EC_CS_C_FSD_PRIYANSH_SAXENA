import { useState } from "react"; 
import InputTodo from "./component/InputTodo.jsx";
function App() {
  const[todoList, setTodoList] = useState([]);
  const inputHandler=(inputvalue)=>{
    setTodoList([...todoList, inputvalue]);
  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data) =>
        <li key={index}>{data}
        </li>)
    }
      <InputTodo inputHandler={inputHandler}/>
      </div>
  )
}
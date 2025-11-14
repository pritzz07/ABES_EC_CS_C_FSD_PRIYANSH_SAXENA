import { useState } from "react"
import InputTodo from "./component/InputTodo"
function App() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (inputVal) => {
    setTodoList([...todoList, inputVal]);
  }
  const deleteHandler = (index) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <button onClick={() => deleteHandler(index)}>DEL</button>
        </li>
      )}
      <InputTodo inputHandler={inputHandler} />
    </div>
  )
}

export default App
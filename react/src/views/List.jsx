import React, {useState} from "react";
import Header from "../components/Header.jsx";

function TodoList() {
  const [todos, setTodos] = useState([
    {id: 1, text: "3x12 pompek", completed: false},
    {id: 2, text: "3x 7-10 podciągnieć", completed: true},
    {id: 3, text: "3x10 pompek diamentowych", completed: false}
  ]);

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  return (

    <div>
      <Header/>
      <div className="container">
        <h1 className="listHeading">Lista zadań</h1>
        <ul className="listToDo">
          {todos.map((todo) => (
            <li key={todo.id}>

              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              {todo.text}
            </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

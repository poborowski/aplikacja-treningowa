import React, {useState} from "react";
import Header from "../components/Header.jsx";

function TodoList() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Zadanie 1", completed: false},
    {id: 2, text: "Zadanie 2", completed: true},
    {id: 3, text: "Zadanie 3", completed: false}
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
        <h1>Lista zadań</h1>
        <ul>
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

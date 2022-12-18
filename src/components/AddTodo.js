 import React, {  useState } from "react";

const AddTodo = ({ dispatch }) => {

  const [todo, setTodo] = useState("");
  return (
    <>
      <form
        id="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add_todo", payload: { title: todo } });import React, {  useState } from "react";
          setTodo("");

        }}
const AddTodo = ({ dispatch }) => {

      >
  const [todo, setTodo] = useState("");
        <input
  return (
          id="todo-input"
    <>
          type="text"
      <form
          value={todo}
        id="todo-form"
          onChange={(e) => setTodo(e.target.value)}
        onSubmit={(e) => {
        />
          e.preventDefault();
        <button type="submit">Add</button>
          dispatch({ type: "add_todo", payload: { title: todo } });
      </form>
          setTodo("");
    </>
        }}
  );
      >
};
        <input

          id="todo-input"
export { AddTodo };
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { AddTodo };
[7:25 pm, 18/12/2022] Satyesh Newton: import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.map((task) => (
 
        <Todo
          key={task.id}
          id={task.id}
          value={task.title}
          dispatch={dispatch}
        />

      ))}
    </div>
  );
};

export default App;
[7:25 pm, 18/12/2022] Satyesh Newton: import React from "react";
const Todo = ({ id, value, dispatch }) => {
  return (
    <div className="todo">
      <div className="todo-title">{value}   <button
        className="todo-delete"
        onClick={() => dispatch({ type: "delete_todo", payload: { id: id } })}
      >
        Delete
      </button></div>
   
    </div>
  );
};

export { Todo };
[7:26 pm, 18/12/2022] Satyesh Newton: const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, newTodo(action.payload.title)];
    case "delete_todo":
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

function newTodo(task) {
  return { id: Date.now(), title: task };
}

export { todoReducer };

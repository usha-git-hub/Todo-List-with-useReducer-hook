import React, { useReducer } from "react";
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

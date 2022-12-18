[7:25 pm, 18/12/2022] Satyesh Newton: import React, {  useState } from "react";

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
       …
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


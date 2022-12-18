import React from "react";
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

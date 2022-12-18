const todoReducer = (state, action) => {
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

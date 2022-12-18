import React, {  useState } from "react";
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

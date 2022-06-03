import { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay your bills", id: 1 },
    { text: "Do your homwork", id: 2 },
    { text: "Go to school", id: 3 },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: Math.random() }]);
  };
  return (
    <div>
      <ul>
        {todos.map(({ text, id }) => {
          return <li key={id}>{text}</li>;
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
    </div>
  );
};

export default TodoList;

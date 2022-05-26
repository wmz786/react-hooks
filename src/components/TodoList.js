import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay your bills", id: 1 },
    { text: "Do your homwork", id: 2 },
    { text: "Go to school", id: 3 },
  ]);

  const addTodo = () => {
    setTodos([...todos, { text: "Learn hooks", id: Math.random() }]);
  };
  return (
    <div>
      <ul>
        {todos.map(({ text, id }) => {
          return <li key={id}>{text}</li>;
        })}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;

import { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
  const [todos, setTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add todo:</label>
      <input
        type="text"
        onChange={(e) => setTodos(e.target.value)}
        value={todos}
        id="todo"
      />
      <input type="submit" />
    </form>
  );
};

export default AddNewTodo;

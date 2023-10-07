import axios from "axios";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_URL = `http://localhost:5000`;

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const { todoList, setTodoList } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/post`, {
        title: todo,
      });
      setTodoList((prev) => [response.data.data, ...prev]);
      setTodo("");
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("something went wrong! Try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Add a new task..."
        value={todo}
        onChange={handleInputChange}
        className="border rounded-l py-2 px-4 w-96"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white py-2 px-4 rounded-r"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;

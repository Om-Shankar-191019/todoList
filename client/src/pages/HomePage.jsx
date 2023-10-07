import React, { useContext, useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoStrip from "../components/TodoStrip";
import axios from "axios";
import { TodoContext } from "../context/todoContext";

const BASE_URL = `http://localhost:5000`;

const HomePage = () => {
  //   const [todoList, setTodoList] = useState([]);
  const { todoList, setTodoList } = useContext(TodoContext);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/post`);
        setTodoList(response.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };

    getAllTodos();
  }, []);
  return (
    <>
      <div className="flex justify-center  min-h-screen bg-[#f7f8f9]">
        <div className="h-auto  w-96  rounded-lg p-4">
          <p className="text-2xl font-semibold mt-2 text-[#063c76] text-center">
            Task Manager
          </p>
          <TodoInput />

          <div className="my-4 ">
            {todoList &&
              todoList.map((item, index) => (
                <TodoStrip key={index} {...item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

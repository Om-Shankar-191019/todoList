import { createContext, useState } from "react";

export const TodoContext = createContext([]);
export const UpdateContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [updateTitle, setUpdateTitle] = useState("");
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      <UpdateContext.Provider value={{ updateTitle, setUpdateTitle }}>
        {children}
      </UpdateContext.Provider>
    </TodoContext.Provider>
  );
};

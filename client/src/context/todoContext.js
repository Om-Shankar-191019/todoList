import { createContext, useState } from "react";

export const TodoContext = createContext([]);

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

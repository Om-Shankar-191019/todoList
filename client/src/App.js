import HomePage from "./pages/HomePage";
import { TodoContextProvider } from "./context/todoContext";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <TodoContextProvider>
      <main>
        <HomePage />
        <ToastContainer />
      </main>
    </TodoContextProvider>
  );
}

import HomePage from "./pages/HomePage";
import { TodoContextProvider } from "./context/todoContext";
export default function App() {
  return (
    <TodoContextProvider>
      <main>
        <HomePage />
      </main>
    </TodoContextProvider>
  );
}

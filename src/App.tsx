import TodoListWrapper from "./components/TodoListWrapper";
import TodoInput from "./components/TodoInput";

export default function App() {
  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <TodoListWrapper>
        <TodoInput />
      </TodoListWrapper>
    </main>
  );
}
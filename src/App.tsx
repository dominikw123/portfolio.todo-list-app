import TodoListWrapper from "./components/TodoListWrapper";

export default function App() {
  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <TodoListWrapper>
        <h1>Todo List</h1>
      </TodoListWrapper>
    </main>
  );
}
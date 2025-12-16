import TodoListWrapper from "@/components/TodoListWrapper";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import useTodos from "@/hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo } = useTodos();

  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <TodoListWrapper>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
      </TodoListWrapper>
    </main>
  );
}
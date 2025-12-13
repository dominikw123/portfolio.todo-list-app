import TodoListWrapper from "@/components/TodoListWrapper";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import type { Todo } from "@/lib/types";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text }]);
  };

  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <TodoListWrapper>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} />
      </TodoListWrapper>
    </main>
  );
}
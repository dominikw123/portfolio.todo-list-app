import TodoListWrapper from "@/components/TodoListWrapper";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import type { Todo } from "@/lib/types";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, text } : todo));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="p-0 flex items-center justify-center w-full min-h-screen overflow-x-hidden sm:p-10">
      <TodoListWrapper>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
      </TodoListWrapper>
    </main>
  );
}
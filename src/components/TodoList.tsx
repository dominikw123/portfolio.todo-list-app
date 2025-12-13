import NoTasksFallback from "@/components/NoTasksFallback";
import type { Todo } from "@/lib/types";

export default function TodoList({ todos }: { todos: Todo[]; }) {
  return (
    todos.length === 0 ? (
      <NoTasksFallback />
    ) : (
      <ul className="flex flex-col gap-2 list-disc list-inside ml-2">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    )
  );
}
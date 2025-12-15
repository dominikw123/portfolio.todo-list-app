import NoTasksFallback from "@/components/NoTasksFallback";
import TodoItem from "@/components/TodoItem";
import type { Todo } from "@/lib/types";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
};

export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    todos.length === 0 ? (
      <NoTasksFallback />
    ) : (
      <ul className="flex flex-col gap-2 ml-1">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    )
  );
}
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Todo } from "@/lib/types";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
};

export default function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-2" key={todo.id}>
      <div className="flex gap-2">
        <Checkbox id={todo.id} checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
        <Label htmlFor={todo.id} className={todo.completed ? "line-through" : ""}>{todo.text}</Label>
      </div>
    </li>
  );
}
import EditTaskModal from "@/components/EditTaskModal";
import DeleteTaskModal from "@/components/DeleteTaskModal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Todo } from "@/lib/types";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
};

export default function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between gap-2" key={todo.id}>
      <div className="flex items-center gap-2">
        <Checkbox id={todo.id} checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
        <Label htmlFor={todo.id} className={"text-md " + (todo.completed ? "line-through text-muted-foreground" : "")}>{todo.text}</Label>
      </div>
      <div className="flex items-center gap-1">
        <EditTaskModal todoText={todo.text} />
        <DeleteTaskModal />
      </div>
    </li>
  );
}
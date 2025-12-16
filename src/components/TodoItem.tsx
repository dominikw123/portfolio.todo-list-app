import EditTaskModal from "@/components/EditTaskModal";
import DeleteTaskModal from "@/components/DeleteTaskModal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Todo } from "@/lib/types";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between gap-2" key={todo.id}>
      <div className="flex items-center gap-3">
        <Checkbox id={todo.id} checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
        <Label htmlFor={todo.id} className={"text-md leading-tight " + (todo.completed ? "line-through text-muted-foreground" : "")}>{todo.text}</Label>
      </div>
      <div className="flex items-center gap-1">
        <EditTaskModal todo={todo} editTodo={editTodo} />
        <DeleteTaskModal todo={todo} deleteTodo={deleteTodo} />
      </div>
    </li>
  );
}
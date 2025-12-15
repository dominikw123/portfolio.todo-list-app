import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import type { Todo } from "@/lib/types";
import { useState } from "react";

type EditTaskModalProps = {
  todo: Todo;
  editTodo: (id: string, text: string) => void;
};

export default function EditTaskModal({ todo, editTodo }: EditTaskModalProps) {
  const [text, setText] = useState(todo.text);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (text.trim() === "") return;

    editTodo(todo.id, text);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost" size="icon-sm"><FontAwesomeIcon icon={faPencil} /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Edit the task here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input type="text" placeholder="Edit task" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
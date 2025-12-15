import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Todo } from "@/lib/types";
import { useState } from "react";

type DeleteTaskModalProps = {
  todo: Todo;
  deleteTodo: (id: string) => void;
};

export default function DeleteTaskModal({ todo, deleteTodo }: DeleteTaskModalProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    deleteTodo(todo.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost" size="icon-sm"><FontAwesomeIcon icon={faTrash} /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this task?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
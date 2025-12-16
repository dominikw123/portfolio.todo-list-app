import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TodoInput({ addTodo }: { addTodo: (text: string) => void; }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;

    addTodo(text);
    setText("");
  };

  return (
    <div className="flex items-center">
      <Input className="rounded-r-none p-[19px] px-4 font-medium" type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
      <Button onClick={handleSubmit} size="lg" className="flex items-center justify-center gap-1 rounded-l-none">Add Task<FontAwesomeIcon icon={faPlus} /></Button>
    </div>
  );
}
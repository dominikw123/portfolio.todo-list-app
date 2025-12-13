import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoInput() {
  return (
    <div className="flex items-center">
      <Input className="rounded-r-none p-[19px] px-4 font-medium" type="text" placeholder="What needs to be done?" />
      <Button size="lg" className="flex items-center justify-center gap-1 rounded-l-none" type="submit">Add Todo<FontAwesomeIcon icon={faPlus} /></Button>
    </div>
  );
}
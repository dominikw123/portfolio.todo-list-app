import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function TodoInput() {
  return (
    <div className="flex items-center">
      <Input className="rounded-r-none" type="text" placeholder="Add a new todo" />
      <Button className="rounded-l-none" type="submit">Add Todo</Button>
    </div >
  );
}
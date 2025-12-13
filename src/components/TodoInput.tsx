import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function TodoInput() {
  return (
    <div className="flex items-center">
      <Input className="rounded-r-none p-[20px] px-4 text-lg" type="text" placeholder="What needs to be done?" />
      <Button className="rounded-l-none p-[21px] text-lg" type="submit">Add Todo</Button>
    </div>
  );
}
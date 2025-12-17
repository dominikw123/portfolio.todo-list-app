import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggleButton() {

  return (
    <Button variant="secondary" size="icon-lg" className="ml-2">
      <FontAwesomeIcon icon={faSun} />
    </Button>
  );
}
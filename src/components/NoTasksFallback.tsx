import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function NoTasksFallback() {
  return (
    <Empty className="max-h-[250px] min-h-[250px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FontAwesomeIcon icon={faList} />
        </EmptyMedia>
        <EmptyTitle>No Tasks Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any tasks yet. Get started by creating
          your first task.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui";

interface HeartToggleProps {
  active?: boolean;
}

export function HeartToggle(props: HeartToggleProps) {
  const { active = false } = props;
  return (
    <Button variant="link" className="p-0">
      {active ? <HeartIcon /> : <HeartFilledIcon className="text-pink-500" />}
    </Button>
  );
}

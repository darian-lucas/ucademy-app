import { commonClassNames } from "@/shared/constants";
import { cn } from "@/lib/utils";
interface BadgeStatusProps {
  item?: {
    className?: string;
    title: string;
    type?: string;
  };
  onClick?: () => void;
}
const BadgeStatus = ({ item, onClick }: BadgeStatusProps) => {
  return (
    <span
      className={cn(commonClassNames.status, item?.className)}
      onClick={onClick}
    >
      {item?.title}
    </span>
  );
};
export default BadgeStatus;

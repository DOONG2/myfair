import { Badge, BadgeList } from "./style";
import { ActivatedBadges, ActivatedBadgeType } from "./TodoUserListPage";

interface TodoUserBadgeListProps {
  activatedBadge: ActivatedBadgeType;
  setActivatedBadge: (activatedBadge: ActivatedBadgeType) => void;
}

export default function TodoUserBadgeList({
  activatedBadge,
  setActivatedBadge,
}: TodoUserBadgeListProps) {
  return (
    <BadgeList>
      {Object.keys(ActivatedBadges)
        .filter((key): key is ActivatedBadgeType => key in ActivatedBadges)
        .map(key => (
          <Badge
            key={`todoPadge-badge-${key}`}
            onClick={() => {
              setActivatedBadge(key);
            }}
            isActivated={key === activatedBadge}
          >
            {ActivatedBadges[key]}
          </Badge>
        ))}
    </BadgeList>
  );
}

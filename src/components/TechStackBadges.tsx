import { Badge } from "@/components/ui/badge";

type TechStackBadgesProps = {
  tags: string[];
};

export function TechStackBadges({ tags }: TechStackBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="bg-accent/20 border-accent text-accent-foreground">
          {tag}
        </Badge>
      ))}
    </div>
  );
}

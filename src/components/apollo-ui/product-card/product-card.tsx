import { Badge, Card, CardContent, CardHeader } from "@/components/ui";
import { HeartToggle } from "@/components/apollo-ui";

interface ProductCardProps {
  description: string;
  imageAlt?: string;
  imageSrc: string;
  isFavourite?: boolean;
  tags?: string[];
  title: string;
}

export function ProductCard(props: ProductCardProps) {
  const { description, imageAlt, imageSrc, isFavourite, title, tags } = props;

  return (
    <Card>
      <CardHeader className="p-0">
        <img
          src={imageSrc}
          alt={imageAlt || description}
          className="rounded-t-sm"
        />
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-2.5">
        <div className="text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-sm mb-1">{title}</h2>
            <HeartToggle active={isFavourite} />
          </div>
          <p className="text-xs">{description}</p>
        </div>
        {tags?.length && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  views: string;
  image: string;
  isPremium?: boolean;
  isTrending?: boolean;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  author,
  readTime,
  views,
  image,
  isPremium = false,
  isTrending = false,
}: ArticleCardProps) => {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-card transition-all hover:shadow-card-hover animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className="bg-primary text-primary-foreground">{category}</Badge>
          {isPremium && <Badge className="bg-accent text-accent-foreground">Premium</Badge>}
          {isTrending && (
            <Badge className="bg-gradient-to-r from-accent to-primary text-primary-foreground">
              <TrendingUp className="mr-1 h-3 w-3" />
              Trending
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground">{author}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
          <span>{views} lượt xem</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

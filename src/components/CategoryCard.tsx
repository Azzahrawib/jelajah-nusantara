import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const CategoryCard = ({ title, description, image, icon: Icon }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm mb-3 group-hover:bg-primary transition-smooth">
            <Icon className="h-6 w-6 text-primary group-hover:text-white transition-smooth" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

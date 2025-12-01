import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export const DestinationCard = ({ name, location, rating, reviews, image, category }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 bg-secondary text-white border-0">
          {category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} ulasan)</span>
        </div>
      </div>
    </Card>
  );
};

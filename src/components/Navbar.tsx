import { Button } from "@/components/ui/button";
import { Menu, Compass } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WisataKu
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth font-medium">
              Beranda
            </a>
            <a href="#destinasi" className="text-foreground hover:text-primary transition-smooth font-medium">
              Destinasi
            </a>
            <a href="#kategori" className="text-foreground hover:text-primary transition-smooth font-medium">
              Kategori
            </a>
            <a href="#tentang" className="text-foreground hover:text-primary transition-smooth font-medium">
              Tentang
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Masuk
            </Button>
            <Button className="gradient-ocean text-white hover:opacity-90 transition-smooth">
              Daftar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

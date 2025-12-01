import { Compass, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent/20 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WisataKu
              </span>
            </div>
            <p className="text-muted-foreground">
              Platform informasi wisata terlengkap untuk menjelajahi keindahan Indonesia
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kategori</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Pantai</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Gunung</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Budaya</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Petualangan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Kontak</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Karir</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>info@wisataku.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 WisataKu - Kelompok 2: Syarhabil, Didik, Chifari, Azzahra, Ferry</p>
        </div>
      </div>
    </footer>
  );
};

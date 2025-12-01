import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { DestinationCard } from "@/components/DestinationCard";
import { Waves, Mountain, Palette, Zap } from "lucide-react";
import mountainImg from "@/assets/mountain.jpg";
import cultureImg from "@/assets/culture.jpg";
import adventureImg from "@/assets/adventure.jpg";
import heroImg from "@/assets/hero-beach.jpg";

const Index = () => {
  const categories = [
    {
      title: "Pantai",
      description: "Nikmati keindahan pantai tropis dengan pasir putih dan air jernih",
      image: heroImg,
      icon: Waves,
    },
    {
      title: "Gunung",
      description: "Jelajahi pegunungan yang menakjubkan dan udara segar",
      image: mountainImg,
      icon: Mountain,
    },
    {
      title: "Budaya",
      description: "Rasakan kekayaan budaya dan tradisi lokal yang autentik",
      image: cultureImg,
      icon: Palette,
    },
    {
      title: "Petualangan",
      description: "Tantang adrenalin dengan aktivitas ekstrem yang seru",
      image: adventureImg,
      icon: Zap,
    },
  ];

  const destinations = [
    {
      name: "Pantai Kuta",
      location: "Bali",
      rating: 4.8,
      reviews: 2450,
      image: heroImg,
      category: "Pantai",
    },
    {
      name: "Gunung Bromo",
      location: "Jawa Timur",
      rating: 4.9,
      reviews: 3200,
      image: mountainImg,
      category: "Gunung",
    },
    {
      name: "Candi Borobudur",
      location: "Yogyakarta",
      rating: 4.9,
      reviews: 5600,
      image: cultureImg,
      category: "Budaya",
    },
    {
      name: "Surfing Mentawai",
      location: "Sumatera Barat",
      rating: 4.7,
      reviews: 890,
      image: adventureImg,
      category: "Petualangan",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Categories Section */}
        <section id="kategori" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pilih Kategori
              <span className="block mt-2 text-primary">Wisata Favorit Anda</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan pengalaman wisata yang sesuai dengan minat dan passion Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section id="destinasi" className="container mx-auto px-4 py-20 bg-accent/10">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Destinasi Populer
              <span className="block mt-2 text-secondary">Paling Banyak Dikunjungi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tempat-tempat wisata terbaik yang wajib Anda kunjungi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div 
                key={destination.name}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary to-secondary p-12 md:p-20 text-center text-white shadow-card-hover">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Siap Memulai Petualangan?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan traveler lainnya dan temukan destinasi impian Anda
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-smooth shadow-lg">
                Mulai Sekarang
              </button>
            </div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

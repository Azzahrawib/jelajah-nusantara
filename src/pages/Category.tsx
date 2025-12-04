import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { getCategoryBySlug, getDestinationsByCategory, categories } from "@/data/destinations";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const destinations = category ? getDestinationsByCategory(category.title) : [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Kategori tidak ditemukan</h1>
          <Link to="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-smooth"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            {category.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            {category.longDescription}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card rounded-2xl shadow-card p-6 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">{destinations.length}</p>
            <p className="text-muted-foreground">Destinasi</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-secondary">
              {Math.round(destinations.reduce((acc, d) => acc + d.rating, 0) / destinations.length * 10) / 10}
            </p>
            <p className="text-muted-foreground">Rating Rata-rata</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">
              {destinations.reduce((acc, d) => acc + d.reviews, 0).toLocaleString()}
            </p>
            <p className="text-muted-foreground">Total Ulasan</p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Semua Destinasi <span className="text-primary">{category.title}</span>
          </h2>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{destinations.length} tempat</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Jelajahi Kategori <span className="text-secondary">Lainnya</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories
            .filter((cat) => cat.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                to={`/kategori/${cat.slug}`}
                className="group relative h-32 rounded-xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;

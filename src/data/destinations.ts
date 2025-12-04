import heroImg from "@/assets/hero-beach.jpg";
import mountainImg from "@/assets/mountain.jpg";
import cultureImg from "@/assets/culture.jpg";
import adventureImg from "@/assets/adventure.jpg";

export interface Destination {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  price: string;
}

export const destinations: Destination[] = [
  // Pantai
  {
    id: "pantai-1",
    name: "Pantai Kuta",
    location: "Bali",
    rating: 4.8,
    reviews: 2450,
    image: heroImg,
    category: "Pantai",
    description: "Pantai ikonik dengan sunset menakjubkan dan ombak yang sempurna untuk surfing",
    price: "Rp 50.000",
  },
  {
    id: "pantai-2",
    name: "Pantai Pink",
    location: "Lombok, NTB",
    rating: 4.9,
    reviews: 1890,
    image: heroImg,
    category: "Pantai",
    description: "Salah satu dari 7 pantai pink di dunia dengan pasir merah muda yang menawan",
    price: "Rp 75.000",
  },
  {
    id: "pantai-3",
    name: "Raja Ampat",
    location: "Papua Barat",
    rating: 5.0,
    reviews: 3200,
    image: heroImg,
    category: "Pantai",
    description: "Surga bawah laut dengan keanekaragaman hayati laut terkaya di dunia",
    price: "Rp 500.000",
  },
  {
    id: "pantai-4",
    name: "Pantai Tanjung Tinggi",
    location: "Belitung",
    rating: 4.7,
    reviews: 1560,
    image: heroImg,
    category: "Pantai",
    description: "Pantai eksotis dengan formasi batu granit raksasa yang ikonik",
    price: "Rp 25.000",
  },
  {
    id: "pantai-5",
    name: "Pantai Nihiwatu",
    location: "Sumba, NTT",
    rating: 4.9,
    reviews: 980,
    image: heroImg,
    category: "Pantai",
    description: "Pantai eksklusif yang dinobatkan sebagai pantai terbaik di dunia",
    price: "Rp 150.000",
  },
  {
    id: "pantai-6",
    name: "Gili Trawangan",
    location: "Lombok, NTB",
    rating: 4.6,
    reviews: 4200,
    image: heroImg,
    category: "Pantai",
    description: "Pulau tanpa kendaraan bermotor dengan kehidupan malam yang semarak",
    price: "Rp 35.000",
  },

  // Gunung
  {
    id: "gunung-1",
    name: "Gunung Bromo",
    location: "Jawa Timur",
    rating: 4.9,
    reviews: 5600,
    image: mountainImg,
    category: "Gunung",
    description: "Gunung berapi aktif dengan pemandangan sunrise yang legendaris",
    price: "Rp 220.000",
  },
  {
    id: "gunung-2",
    name: "Gunung Rinjani",
    location: "Lombok, NTB",
    rating: 4.8,
    reviews: 2100,
    image: mountainImg,
    category: "Gunung",
    description: "Gunung tertinggi kedua dengan danau kawah Segara Anak yang memukau",
    price: "Rp 350.000",
  },
  {
    id: "gunung-3",
    name: "Kawah Ijen",
    location: "Banyuwangi",
    rating: 4.9,
    reviews: 3400,
    image: mountainImg,
    category: "Gunung",
    description: "Fenomena blue fire langka dan danau kawah asam terbesar di dunia",
    price: "Rp 100.000",
  },
  {
    id: "gunung-4",
    name: "Gunung Semeru",
    location: "Jawa Timur",
    rating: 4.7,
    reviews: 1800,
    image: mountainImg,
    category: "Gunung",
    description: "Gunung tertinggi di Pulau Jawa dengan trek pendakian menantang",
    price: "Rp 300.000",
  },
  {
    id: "gunung-5",
    name: "Dieng Plateau",
    location: "Jawa Tengah",
    rating: 4.6,
    reviews: 2900,
    image: mountainImg,
    category: "Gunung",
    description: "Dataran tinggi dengan candi kuno dan fenomena embun es",
    price: "Rp 150.000",
  },
  {
    id: "gunung-6",
    name: "Gunung Kerinci",
    location: "Jambi",
    rating: 4.8,
    reviews: 890,
    image: mountainImg,
    category: "Gunung",
    description: "Gunung tertinggi di Sumatera dengan hutan hujan tropis lebat",
    price: "Rp 250.000",
  },

  // Budaya
  {
    id: "budaya-1",
    name: "Candi Borobudur",
    location: "Yogyakarta",
    rating: 4.9,
    reviews: 8900,
    image: cultureImg,
    category: "Budaya",
    description: "Candi Buddha terbesar di dunia dan warisan budaya UNESCO",
    price: "Rp 50.000",
  },
  {
    id: "budaya-2",
    name: "Candi Prambanan",
    location: "Yogyakarta",
    rating: 4.9,
    reviews: 6700,
    image: cultureImg,
    category: "Budaya",
    description: "Kompleks candi Hindu terbesar di Indonesia dengan arsitektur megah",
    price: "Rp 50.000",
  },
  {
    id: "budaya-3",
    name: "Tana Toraja",
    location: "Sulawesi Selatan",
    rating: 4.8,
    reviews: 2300,
    image: cultureImg,
    category: "Budaya",
    description: "Kebudayaan unik dengan rumah tongkonan dan upacara pemakaman tradisional",
    price: "Rp 100.000",
  },
  {
    id: "budaya-4",
    name: "Desa Penglipuran",
    location: "Bali",
    rating: 4.7,
    reviews: 3100,
    image: cultureImg,
    category: "Budaya",
    description: "Desa adat Bali terbersih dengan arsitektur tradisional yang terjaga",
    price: "Rp 30.000",
  },
  {
    id: "budaya-5",
    name: "Keraton Yogyakarta",
    location: "Yogyakarta",
    rating: 4.6,
    reviews: 4500,
    image: cultureImg,
    category: "Budaya",
    description: "Istana kesultanan yang masih aktif dengan koleksi pusaka bersejarah",
    price: "Rp 15.000",
  },
  {
    id: "budaya-6",
    name: "Kampung Naga",
    location: "Jawa Barat",
    rating: 4.5,
    reviews: 1200,
    image: cultureImg,
    category: "Budaya",
    description: "Desa adat Sunda dengan kearifan lokal dan arsitektur tradisional",
    price: "Rp 20.000",
  },

  // Petualangan
  {
    id: "adventure-1",
    name: "Surfing Mentawai",
    location: "Sumatera Barat",
    rating: 4.9,
    reviews: 1200,
    image: adventureImg,
    category: "Petualangan",
    description: "Spot surfing kelas dunia dengan ombak perfect barrel",
    price: "Rp 1.500.000",
  },
  {
    id: "adventure-2",
    name: "Rafting Sungai Citarik",
    location: "Jawa Barat",
    rating: 4.7,
    reviews: 2800,
    image: adventureImg,
    category: "Petualangan",
    description: "Arung jeram grade 3-4 dengan pemandangan alam yang asri",
    price: "Rp 350.000",
  },
  {
    id: "adventure-3",
    name: "Diving Bunaken",
    location: "Sulawesi Utara",
    rating: 4.9,
    reviews: 1900,
    image: adventureImg,
    category: "Petualangan",
    description: "Menyelam di taman laut dengan terumbu karang spektakuler",
    price: "Rp 750.000",
  },
  {
    id: "adventure-4",
    name: "Paragliding Batu",
    location: "Jawa Timur",
    rating: 4.6,
    reviews: 1500,
    image: adventureImg,
    category: "Petualangan",
    description: "Terbang paralayang dengan pemandangan pegunungan yang menakjubkan",
    price: "Rp 450.000",
  },
  {
    id: "adventure-5",
    name: "Canyoning Ciater",
    location: "Jawa Barat",
    rating: 4.5,
    reviews: 890,
    image: adventureImg,
    category: "Petualangan",
    description: "Petualangan susur sungai dengan rappelling dan cliff jumping",
    price: "Rp 500.000",
  },
  {
    id: "adventure-6",
    name: "Snorkeling Wakatobi",
    location: "Sulawesi Tenggara",
    rating: 4.8,
    reviews: 2100,
    image: adventureImg,
    category: "Petualangan",
    description: "Snorkeling di surga bawah laut dengan biodiversitas luar biasa",
    price: "Rp 250.000",
  },
];

export const categories = [
  {
    slug: "pantai",
    title: "Pantai",
    description: "Nikmati keindahan pantai tropis dengan pasir putih dan air jernih",
    longDescription: "Indonesia memiliki lebih dari 17.000 pulau dengan garis pantai yang membentang ribuan kilometer. Temukan pantai-pantai tersembunyi hingga yang terkenal dunia.",
    image: heroImg,
  },
  {
    slug: "gunung",
    title: "Gunung",
    description: "Jelajahi pegunungan yang menakjubkan dan udara segar",
    longDescription: "Dari gunung berapi aktif hingga puncak tertinggi, Indonesia menawarkan pengalaman pendakian yang tak terlupakan dengan pemandangan spektakuler.",
    image: mountainImg,
  },
  {
    slug: "budaya",
    title: "Budaya",
    description: "Rasakan kekayaan budaya dan tradisi lokal yang autentik",
    longDescription: "Jelajahi warisan budaya Indonesia yang kaya, dari candi kuno hingga desa adat yang masih menjaga tradisi leluhur.",
    image: cultureImg,
  },
  {
    slug: "petualangan",
    title: "Petualangan",
    description: "Tantang adrenalin dengan aktivitas ekstrem yang seru",
    longDescription: "Rasakan sensasi petualangan ekstrem dari surfing ombak besar hingga diving di perairan terbaik dunia.",
    image: adventureImg,
  },
];

export const getCategoryBySlug = (slug: string) => {
  return categories.find((cat) => cat.slug === slug);
};

export const getDestinationsByCategory = (categoryTitle: string) => {
  return destinations.filter((dest) => dest.category === categoryTitle);
};

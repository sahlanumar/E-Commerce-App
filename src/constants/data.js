export const categories = [
  { id: "1", name: "Elektronik", icon: "💻" },
  { id: "2", name: "Pakaian", icon: "👕" },
  { id: "3", name: "Buku", icon: "📚" },
  { id: "4", name: "Kecantikan", icon: "💄" },
  { id: "5", name: "Rumah Tangga", icon: "🏠" },
  { id: "6", name: "Olahraga", icon: "⚽" },
];

export const banners = [
  { id: "1", image: "https://picsum.photos/seed/promo1/400/200" },
  { id: "2", image: "https://picsum.photos/seed/promo2/400/200" },
  { id: "3", image: "https://picsum.photos/seed/promo3/400/200" },
];

export const products = [
  {
    id: "p1",
    categoryId: "1", // Elektronik
    name: "Laptop ProMax 14 inch",
    price: 15000000,
    rating: 4.8,
    image: "https://picsum.photos/seed/laptop/400/400",
    description:
      "Laptop canggih dengan performa tinggi untuk profesional kreatif. Ditenagai prosesor terbaru, RAM 16GB, dan layar Liquid Retina XDR.",
    seller: {
      name: "Gadget Store ID",
      location: "Jakarta",
    },
  },
  {
    id: "p2",
    categoryId: "1", // Elektronik
    name: "Smartphone GigaPhone 12",
    price: 8500000,
    rating: 4.7,
    image: "https://picsum.photos/seed/phone/400/400",
    description:
      "Smartphone dengan kamera 108MP dan layar AMOLED 120Hz. Baterai tahan lama untuk menunjang aktivitas seharian.",
    seller: {
      name: "Gadget Store ID",
      location: "Jakarta",
    },
  },
  {
    id: "p3",
    categoryId: "2", // Pakaian
    name: "T-Shirt Katun Premium",
    price: 150000,
    rating: 4.9,
    image: "https://picsum.photos/seed/tshirt/400/400",
    description:
      "Kaos nyaman yang terbuat dari 100% katun premium. Cocok untuk dipakai sehari-hari dengan berbagai pilihan warna.",
    seller: {
      name: "FashionKita",
      location: "Bandung",
    },
  },
  {
    id: "p4",
    categoryId: "6", // Olahraga
    name: "Sepatu Lari FlashRun",
    price: 899000,
    rating: 4.7,
    image: "https://picsum.photos/seed/flashrun/400/400",
    description:
      "Sepatu lari ringan dengan bantalan responsif, cocok untuk lari jarak jauh maupun pendek di berbagai medan.",
    seller: {
      name: "Sport Station",
      location: "Surabaya",
    },
  },
  {
    id: "p5",
    categoryId: "3", // Buku
    name: "Novel 'Bumi' by Tere Liye",
    price: 95000,
    rating: 4.9,
    image: "https://picsum.photos/seed/bumi/400/400",
    description:
      "Sebuah novel fantasi petualangan yang membuka seri 'Dunia Paralel' dengan karakter yang kuat dan imajinasi yang liar.",
    seller: {
      name: "Gramedia",
      location: "Malang",
    },
  },
  {
    id: "p6",
    categoryId: "5", // Rumah Tangga
    name: "Blender Multifungsi Turbo",
    price: 750000,
    rating: 4.5,
    image: "https://picsum.photos/seed/blender/400/400",
    description:
      "Blender serbaguna yang dapat menghaluskan buah, sayur, hingga es batu dengan kecepatan turbo. Material food-grade dan aman.",
    seller: {
      name: "Rumah Impian",
      location: "Surabaya",
    },
  },
  {
    id: "p7",
    categoryId: "4", // Kecantikan
    name: "Serum Wajah Vitamin C",
    price: 150000,
    rating: 4.8,
    image: "https://picsum.photos/seed/serum/400/400",
    description:
      "Serum pencerah wajah dengan kandungan Vitamin C murni untuk melawan radikal bebas dan menyamarkan noda hitam.",
    seller: {
      name: "BeautyHaul",
      location: "Jakarta",
    },
  },
  {
    id: "p8",
    categoryId: "1", // Elektronik
    name: "Headphone Kedap Suara",
    price: 1250000,
    rating: 4.8,
    image: "https://picsum.photos/seed/headphone/400/400",
    description:
      "Nikmati audio imersif tanpa gangguan dengan teknologi active noise cancelling terdepan. Baterai tahan hingga 30 jam.",
    seller: {
      name: "Gadget Store ID",
      location: "Jakarta",
    },
  },
  {
    id: "p9",
    categoryId: "2", // Pakaian
    name: "Kemeja Flanel Kotak",
    price: 275000,
    rating: 4.6,
    image: "https://picsum.photos/seed/flanel/400/400",
    description:
      "Kemeja flanel lengan panjang dengan bahan lembut dan tebal, memberikan kenyamanan dan gaya kasual.",
    seller: {
      name: "FashionKita",
      location: "Bandung",
    },
  },
  {
    id: "p10",
    categoryId: "5", // Rumah Tangga
    name: "Air Fryer Digital 4L",
    price: 950000,
    rating: 4.9,
    image: "https://picsum.photos/seed/airfryer/400/400",
    description:
      "Menggoreng lebih sehat tanpa minyak. Kapasitas 4 liter dengan panel digital yang mudah digunakan.",
    seller: {
      name: "Rumah Impian",
      location: "Surabaya",
    },
  },
  {
    id: "p11",
    categoryId: "3", // Buku
    name: "Atomic Habits - James Clear",
    price: 108000,
    rating: 4.9,
    image: "https://picsum.photos/seed/atomichabits/400/400",
    description:
      "Buku self-help terlaris tentang bagaimana membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil.",
    seller: {
      name: "Gramedia",
      location: "Malang",
    },
  },
  {
    id: "p12",
    categoryId: "6", // Olahraga
    name: "Matras Yoga Anti-Slip",
    price: 250000,
    rating: 4.8,
    image: "https://picsum.photos/seed/matras/400/400",
    description:
      "Matras yoga dengan ketebalan 6mm dan permukaan anti-slip untuk kenyamanan dan keamanan maksimal saat berolahraga.",
    seller: {
      name: "Sport Station",
      location: "Surabaya",
    },
  },
];

export const sampleCart = [
  {
    productId: "p1",
    quantity: 1,
  },
  {
    productId: "p3", 
    quantity: 2,
  },
  {
    productId: "p8", 
    quantity: 1,
  },
];

export const userProfile = {
  name: "Budi Santoso",
  email: "budi.santoso@example.com",
  avatarUrl: "https://i.pravatar.cc/150?u=budisantoso", 
};

export const profileMenus = [
  { id: "1", title: "Pesanan Saya", icon: "cube-outline", screen: "MyOrders" },
  { id: "2", title: "Wishlist", icon: "heart-outline", screen: "Wishlist" },
  { id: "3", title: "Setting", icon: "settings-outline", screen: "Settings" },
  { id: "4", title: "Logout", icon: "log-out-outline", action: "logout" }, 
];
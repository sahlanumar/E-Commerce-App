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
    categoryId: "1",
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
    categoryId: "1",
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
    categoryId: "2",
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
    id: "p6",
    categoryId: "5",
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
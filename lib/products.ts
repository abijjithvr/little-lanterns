import { CATEGORIES, type Category, type Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Sleepy Puppy",
    slug: "sleepy-puppy",
    description:
      "A pocket-sized cuddle buddy with floppy ears and the softest stitch texture.",
    personality: "Loves naps, lullabies, and warm blankets on rainy evenings.",
    category: "Plushies",
    price: 999,
    stock: 8,
    photos: [
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Sleepy+Puppy",
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Puppy+Texture",
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Puppy+Angle+1",
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Puppy+Angle+2",
    ],
    sizeInfo: "Approx. 16 cm tall",
    careInstructions: "Gentle hand wash, reshape softly, and air dry flat in shade.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-10",
  },
  {
    id: "p2",
    name: "Tiny Dino",
    slug: "tiny-dino",
    description:
      "A tiny green friend with round cheeks and tiny spikes, made for desk adventures.",
    personality: "Brave but bashful. Collects pebbles and listens to bedtime stories.",
    category: "Character Collection",
    price: 1099,
    stock: 5,
    photos: [
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Tiny+Dino",
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Dino+Texture",
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Dino+Angle+1",
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Dino+Angle+2",
    ],
    sizeInfo: "Approx. 14 cm tall",
    careInstructions: "Spot clean gently and keep away from rough surfaces.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-13",
  },
  {
    id: "p3",
    name: "Baby Chick",
    slug: "baby-chick",
    description:
      "Sunny, squishy, and stitched with buttery yarn for maximum cozy hugs.",
    personality: "Wakes up early, sings softly, and loves tiny picnic baskets.",
    category: "Plushies",
    price: 899,
    stock: 11,
    photos: [
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Baby+Chick",
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Chick+Texture",
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Chick+Angle+1",
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Chick+Angle+2",
    ],
    sizeInfo: "Approx. 12 cm tall",
    careInstructions: "Hand wash only with mild soap and air dry flat.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-18",
  },
  {
    id: "p4",
    name: "Pocket Piglet",
    slug: "pocket-piglet",
    description:
      "A rosy mini piglet with curly tail charm and velvety handcrafted stitches.",
    personality: "Always hungry for snacks and compliments. Gives the best side hugs.",
    category: "Keychains",
    price: 699,
    stock: 2,
    photos: [
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Pocket+Piglet",
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Piglet+Texture",
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Piglet+Angle+1",
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Piglet+Angle+2",
    ],
    sizeInfo: "Approx. 10 cm tall",
    careInstructions: "Spot clean the keychain loop and avoid soaking the charm.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-08",
  },
  {
    id: "p5",
    name: "Lantern Bunny",
    slug: "lantern-bunny",
    description:
      "A dreamy bunny carrying a tiny lantern charm to brighten sleepy corners.",
    personality: "A gentle wanderer that brings calm vibes and moonlit cuddles.",
    category: "Character Collection",
    price: 1299,
    stock: 4,
    photos: [
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Lantern+Bunny",
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Bunny+Texture",
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Bunny+Angle+1",
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Bunny+Angle+2",
    ],
    sizeInfo: "Approx. 17 cm tall",
    careInstructions: "Gentle hand wash only and dry away from direct sunlight.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-20",
  },
  {
    id: "p6",
    name: "Mini Snoopy",
    slug: "mini-snoopy",
    description:
      "A tiny nostalgic pup made with cloud-soft yarn and a playful stitched smile.",
    personality: "Loyal, curious, and happiest when tucked into your tote bag.",
    category: "Keychains",
    price: 749,
    stock: 6,
    photos: [
      "https://placehold.co/900x900/F5F0FF/6B4F3B?text=Mini+Snoopy",
      "https://placehold.co/900x900/FFF9F5/6B4F3B?text=Snoopy+Texture",
      "https://placehold.co/900x900/FCEEEF/6B4F3B?text=Snoopy+Angle+1",
      "https://placehold.co/900x900/FFDCC8/6B4F3B?text=Snoopy+Angle+2",
    ],
    sizeInfo: "Approx. 11 cm tall",
    careInstructions: "Keep it dry, spot clean when needed, and store in a soft pouch.",
    shippingInfo: "Packed in 1-2 business days and shipped across India within 3-7 days.",
    createdAt: "2026-06-16",
  },
];

export function getInStockProducts(): Product[] {
  return products.filter((product) => product.stock > 0);
}

export function getCategories(): readonly Category[] {
  return CATEGORIES;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(slug: string, category: Category, limit = 3): Product[] {
  return products.filter((product) => product.slug !== slug && product.category === category).slice(0, limit);
}

export function getNewestProducts(limit = 4): Product[] {
  return [...products]
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, limit);
}

export function getAvailabilityLabel(stock: number): string {
  if (stock <= 0) {
    return "Sold Out";
  }

  if (stock <= 2) {
    return `Only ${stock} left`;
  }

  return "In Stock";
}

export function formatINR(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

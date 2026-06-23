export const CATEGORIES = ["Plushies", "Keychains", "Character Collection"] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  personality: string;
  category: Category;
  price: number;
  stock: number;
  photos: [string, string, string, string];
  sizeInfo: string;
  careInstructions: string;
  shippingInfo: string;
  createdAt: string;
}

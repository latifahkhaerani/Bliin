export type ProductType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  originalPrice?: number;

  thumbnail: string;
  images: string[];

  rating: number;
  reviews: number;

  stock: number;
  freeShipping: boolean;
  rewards: number;

  features: string[];
  tags: string[];

  createdAt: Date;
  updatedAt: Date;
};

export type WishlistType = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  product: ProductType;
};

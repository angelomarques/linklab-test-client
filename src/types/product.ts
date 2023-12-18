export type ProductType = {
  id: string;
  name: string;
  image_url: string;
  value: number;
  score: number;
  createdAt: string;
  updatedAt: string;
  category: "TOOL" | "HARDWARE" | "CHEMICAL";
};

import { ProductType } from "@/types/product";
import { api } from "./api";

export const getProducts = async (params?: {
  category?: ProductType["category"];
  limit?: number;
}) => {
  const { data } = await api.get<ProductType[]>("/products", { params });
  return data;
};

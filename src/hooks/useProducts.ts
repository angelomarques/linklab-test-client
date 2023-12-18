import { getProducts } from "@/services/products";
import { ProductType } from "@/types/product";
import { UseQueryOptions, useQuery } from "react-query";

export const usePosts = (
  params?: {
    category?: ProductType["category"];
    limit?: number;
  },
  options?: UseQueryOptions<
    ProductType[],
    unknown,
    ProductType[],
    ["posts", typeof params]
  >
) => {
  return useQuery(["posts", params], () => getProducts(params), options);
};

"use client";

import { usePosts } from "@/hooks/useProducts";
import { ProductItem } from "./ProductItem";
import { ProductsNavbar } from "./ProductsNavbar";

import styles from "./ProductsSection.module.scss";
import { useState } from "react";
import { ProductType } from "@/types/product";
import { ProductSkeleton } from "../ProductSkeleton";

export const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductType["category"]>("CHEMICAL");
  const { data: posts, isLoading } = usePosts({
    category: selectedCategory,
    limit: 3,
  });

  return (
    <div className={styles.productsSection}>
      <ProductsNavbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <h2>Produtos</h2>

      <div className="items-container">
        {isLoading
          ? Array(3)
              .fill(null)
              .map((_, index) => <ProductSkeleton key={index} />)
          : posts?.map((post) => <ProductItem {...post} key={post.id} />)}
      </div>
    </div>
  );
};

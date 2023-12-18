"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Chemical } from "@/assets/icons/Chemical";
import { Glass } from "@/assets/icons/Glass";
import { Tool } from "@/assets/icons/Tool";
import styles from "./ProductsNavbar.module.scss";
import Image from "next/image";
import { ProductType } from "@/types/product";

interface Props {
  setSelectedCategory: Dispatch<SetStateAction<ProductType["category"]>>;
  selectedCategory: ProductType["category"];
}

export const ProductsNavbar = ({selectedCategory, setSelectedCategory}:Props) => {

  const getClassName = (category: ProductType["category"]) =>
    selectedCategory === category ? "selected" : "";
  const getIconColor = (category: ProductType["category"]) =>
    selectedCategory === category ? "white" : "#313352";
  const getImageUrl = (category: ProductType["category"]) =>
    `/images/products-navbar-${
      selectedCategory === category ? "light" : "dark"
    }.svg`;

  return (
    <div className={styles.productsNavbar}>
      <button
        className={getClassName("HARDWARE")}
        onClick={() => setSelectedCategory("HARDWARE")}
      >
        <span className="section">Produtos</span>
        <Glass color={getIconColor("HARDWARE")} />
        <span className="title">Vidrarias e Equipamentos</span>
        <Image src={getImageUrl("HARDWARE")} width={23} height={23} alt="" />
      </button>
      <button
        className={getClassName("CHEMICAL")}
        onClick={() => setSelectedCategory("CHEMICAL")}
      >
        <span className="section">Químicos</span>
        <Chemical color={getIconColor("CHEMICAL")} />
        <span className="title">Materiais Químicos</span>
        <Image width={27} height={33} src={getImageUrl("CHEMICAL")} alt="" />
      </button>
      <button
        className={getClassName("TOOL")}
        onClick={() => setSelectedCategory("TOOL")}
      >
        <span className="section">Laboratórios</span>
        <Tool color={getIconColor("TOOL")} />
        <span className="title">Ferramentas e utensílios</span>
        <Image width={25} height={22} src={getImageUrl("TOOL")} alt="" />
      </button>
    </div>
  );
};

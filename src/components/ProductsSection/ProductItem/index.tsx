"use client";

import Image from "next/image";
import styles from "./ProductItem.module.scss";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface Props extends ProductType {}

export const ProductItem = ({ image_url, name, score, value }: Props) => {
  return (
    <article className={styles.productItem}>
      <Image src={image_url} alt="" width={320} height={150} />
      <div className="text-content">
        <div>
          <h3>{name}</h3>
          <p className="score">Nota: {score.toFixed(1)}</p>
        </div>

        <p className="price">{formatPrice(value)}</p>
      </div>
    </article>
  );
};

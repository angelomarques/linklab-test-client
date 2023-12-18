import Image from "next/image";
import styles from "./page.module.scss";
import { ProductsSection } from "@/components/ProductsSection";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={clsx(styles.home, "container")}>
      <Image width={188} height={262} src="/images/home-details.svg" className="home-details" alt="" />
      <section className="hero">
        <h1>
          Qualidade e expertise em produtos <span>químicos e acessórios</span>
        </h1>
        <p>
          Estamos preparados para te entender e atender da melhor forma para
          suprir todas as suas demandas em químicos e similares.
        </p>
        <Image width={311} height={174} src="/images/hero.svg" alt="" />
      </section>
      <ProductsSection />
      <Image width={187} height={187} src="/images/stamp.svg" className="stamp" alt="" />
    </div>
  );
}

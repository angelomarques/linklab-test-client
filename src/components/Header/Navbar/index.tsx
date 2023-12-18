"use client";

import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isOpen: boolean;
}

export const Navbar = ({ isOpen }: Props) => {
  useEffect(() => {
    if (document) {
      if (isOpen) {
        document
          .querySelector(".container")
          ?.classList.add("container-blocked");
      } else {
        document
          .querySelector(".container")
          ?.classList.remove("container-blocked");
      }
    }

    return () => {
      document
        .querySelector(".container")
        ?.classList.remove("container-blocked");
    };
  });

  return (
    <nav className={clsx(styles.navbar, isOpen ? "open" : "")}>
      <div>
        <h2>Navegue por nosso site</h2>

        <ul className="nav-links">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/">Laudos</Link>
          </li>
          <li>
            <Link href="/">Sobre nós</Link>
          </li>
          <li>
            <Link href="/">Certificações</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
        </ul>

        <h2>Catálogo completo de itens para você</h2>

        <h3>Laborátório</h3>
        <div className="category-links">
          <Link href="/">
            <Image src="/icons/settings.svg" width={20} height={20} alt="" />
            <span>Equipamentos</span>
          </Link>
          <Link href="/">
            <Image src="/icons/thermometer.svg" width={20} height={20} alt="" />
            <span>Termômetros</span>
          </Link>
        </div>
        <div className="category-links">
          <Link href="/">
            <Image
              src="/icons/safety-glasses.svg"
              width={20}
              height={20}
              alt=""
            />
            <span>Acessórios</span>
          </Link>
        </div>

        <h3>Utensílios</h3>
        <div className="category-links">
          <Link href="/">
            <Image src="/icons/tabler.svg" width={20} height={20} alt="" />
            <span>Inox e Ferragens</span>
          </Link>
          <Link href="/">
            <Image src="/icons/chemistry.svg" width={20} height={20} alt="" />
            <span>Vidrarias</span>
          </Link>
        </div>
        <div className="category-links">
          <Link href="/">
            <Image src="/icons/jewelry-box.svg" width={20} height={20} alt="" />
            <span>Plásticos</span>
          </Link>
          <Link href="/">
            <Image src="/icons/bowl.svg" width={20} height={20} alt="" />
            <span>Porcelanas</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

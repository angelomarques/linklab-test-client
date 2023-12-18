'use client';

import clsx from "clsx";
import styles from "./DropdownMenu.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isOpen: boolean;
}

export const DropdownMenu = ({ isOpen }: Props) => {
  return (
    <nav className={clsx(styles.dropdownMenu, isOpen ? "active" : "")}>
      <div>
        <h2>Catálogo completo de itens para você</h2>

        <div>
          <h3>Laborátório</h3>
          <div className="category-links">
            <Link href='/'>
              <Image src="/icons/settings.svg" width={20} height={20} alt="" />
              <span>Equipamentos</span>
            </Link>
            <Link href='/'>
              <Image src="/icons/thermometer.svg" width={20} height={20} alt="" />
              <span>Termômetros</span>
            </Link>
          </div>
          <div className="category-links">
            <Link href='/'>
              <Image src="/icons/safety-glasses.svg" width={20} height={20} alt="" />
              <span>Acessórios</span>
            </Link>
          </div>
        </div>

        <div>
          <h3>Utensílios</h3>
          <div className="category-links">
            <Link href='/'>
              <Image src="/icons/tabler.svg" width={20} height={20} alt="" />
              <span>Inox e Ferragens</span>
            </Link>
            <Link href='/'>
              <Image src="/icons/chemistry.svg" width={20} height={20} alt="" />
              <span>Vidrarias</span>
            </Link>
          </div>
          <div className="category-links">
            <Link href='/'>
              <Image src="/icons/jewelry-box.svg" width={20} height={20} alt="" />
              <span>Plásticos</span>
            </Link>
            <Link href='/'>
              <Image src="/icons/bowl.svg" width={20} height={20} alt="" />
              <span>Porcelanas</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

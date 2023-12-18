"use client";

import { useState } from "react";
import { Logo } from "@/assets/Logo";
import { Button } from "../Button";
import styles from "./Header.module.scss";
import { Navbar } from "./Navbar";
import { ChevronDown } from "@/assets/icons/ChevronDown";
import { DropdownMenu } from "./DropdownMenu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />

        <nav className="desktop-nav-links">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <Button
                variant="dropdown"
                className={isDropdownMenuOpen ? "active" : ""}
                onClick={toggleDropdownMenu}
              >
                <span>Produtos</span>
                <ChevronDown />
              </Button>
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
        </nav>

        <Button variant="secondary" className="desktop-button">
          <Image width={23} height={23} alt="" src="/icons/settings-menu.svg" />
          <span>Orçamento</span>
        </Button>

        <div className="icons">
          <Button variant="contained">
            <Image width={23} height={23} alt="" src="/icons/settings-menu.svg" />
          </Button>
          <Button onClick={toggleNavbar}>
            <Image width={29} height={29} alt="" src="/icons/hamburger-menu.svg" />
          </Button>
        </div>
      </header>

      <DropdownMenu isOpen={isDropdownMenuOpen} />

      <Navbar isOpen={isNavbarOpen} />
    </>
  );
};

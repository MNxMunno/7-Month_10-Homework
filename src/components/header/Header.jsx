"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Header = () => {
  // const [shrink, setShrink] = useState(false);
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 30) {
  //     setShrink(true);
  //   } else {
  //     setShrink(false);
  //   }
  // });
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <Link className="logo" href={"/"}>
            <Image src={logo} width={134} height={40} alt="logo" />
          </Link>
          <div className="nav__items">
            <Link href={"/"}>Home</Link>
            <Link href={"/bags"}>Bags</Link>
            <Link href={"/snakers"}>Snakers</Link>
            <Link href={"/belt"}>Belt</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

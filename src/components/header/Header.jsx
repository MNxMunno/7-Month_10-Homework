"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Header = () => {
  // const cart = useSelector((s) => s.cart.value);
  const wishlist = useSelector((s) => s.heart.value);
  const [shrink, setShrink] = useState(false);
  const navigate = useRouter();
  // let totalPrice = cart
  //   ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
  //   .toFixed(2);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="content">
            <div className="items">
              <select name="lang" id="lang">
                <option value="eng">Eng</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <select name="mony" id="mony">
                <option value="usd">Usd</option>
                <option value="uzs">Uzs</option>
                <option value="rub">Rubl</option>
              </select>
            </div>
            <div className="top__btns">
              <button>
                <FaRegUser />
              </button>
              <button onClick={() => navigate.push("/wishlist")}>
                <FaRegHeart />
                <sup className="count">{wishlist.length}</sup>
              </button>
              <button onClick={() => navigate.push("/cart")}>
                <MdOutlineShoppingCart />
                {/* <sup className="count">{cart.length}</sup> */}
              </button>
              <p> Items</p>
              {/* <b>$ {totalPrice}</b> */}
              <button>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className={`navbar ${shrink ? "shrink" : ""}`}>
        <div className="container">
          <nav>
            <Link className="logo" href={"/"}>
              <Image src={logo} width={134} height={40} alt="logo" />
            </Link>
            <div className="nav__items">
              <Link href={"/"}>Home</Link>
              <Link href={"/detail"}>Bags</Link>
              <Link href={"/snakers"}>Snakers</Link>
              <Link href={"/belt"}>Belt</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

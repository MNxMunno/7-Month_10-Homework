"use client";
import { addToCart } from "@/lib/features/slice/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/hearSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaCartPlus, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ data }) => {
  let wishlist = useSelector((state) => state.heart.value);
  let cart = useSelector((state) => state.cart.value);
  const navigate = useRouter();
  const dispatch = useDispatch();

  console.log(wishlist);

  useEffect(() => {
    dispatch(addToCart(JSON.parse(localStorage.getItem("cart")) || []));
    dispatch(toggleHeart(JSON.parse(localStorage.getItem("wishlist")) || []));
  }, []);

  const handleLike = (product) => {
    let index = wishlist.findIndex((el) => el.id === product.id);
    let result = null;
    if (index < 0) {
      result = [...wishlist, product];
    } else {
      result = wishlist.filter((el) => el.id !== product.id);
    }
    dispatch(toggleHeart(result));
    localStorage.setItem("wishlist", JSON.stringify(result));
  };
  const handleCart = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    if (index < 0) {
      result = [...cart, { ...product, quantity: 1 }];
    }
    dispatch(addToCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };

  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <Image
        className="pro__img"
        width={100}
        height={100}
        src={el.image}
        alt="img"
      />
      <div className="detail__btns">
        <button onClick={() => handleLike(el)}>
          {wishlist?.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => handleCart(el)}>
          <FaCartPlus />
        </button>
        <Link href={`/detail/${el.id}`}>
          <button onClick={() => navigate.push("/detail")}>
            <FaEye />
          </button>
        </Link>
      </div>
      <h3 title={el.title}>{el.title}</h3>
      <p className="stars">⭐⭐⭐⭐⭐</p>
      <span>
        $ {el.price} <del>{el.price * 1.5}</del> <b>24% Off</b>
      </span>
    </div>
  ));
  return (
    <section className="detail_cards">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Cart;

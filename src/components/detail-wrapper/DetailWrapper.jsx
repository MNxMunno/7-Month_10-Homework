"use client";

import { addToCart } from "@/lib/features/slice/cartSlice";
// import { addToCart } from "@/lib/features/slice/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/hearSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const DetailWrapper = ({ data }) => {
  let wishlist = useSelector((state) => state.heart.value);
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

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

  return (
    <section className="detailWrapper">
      <div className="container">
        <div className="cards">
          <div className="card">
            <Image
              src={data?.image}
              alt={data?.title}
              width={100}
              height={100}
            />
            <div className="img__content">
              <Image
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <Image
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <Image
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <Image
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
            </div>
          </div>
          <div className="cart">
            <h3>{data?.title}</h3>
            <p className="star">⭐⭐⭐⭐⭐</p>
            <span className="price">
              $ {data?.price} <del>{data?.price * 1.5}</del> <b>24% Off</b>
            </span>
            <div className="info_detail">
              <span>
                Category:{""}
                <b> {data?.category}</b>
              </span>
              <span>
                Rating:{""}
                <b> {data?.rating?.rate}</b>
              </span>
              <span>
                Count:{""}
                <b> {data?.rating?.count}</b>
              </span>
            </div>
            <div className="color"></div>
            <div className="btns">
              <button onClick={() => handleCart(data)}>
                <FaCartPlus />
                Add To Cart
              </button>
              <button onClick={() => handleLike(data)}>
                {wishlist?.some((item) => item.id === data?.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
          <div className="second_cart">
            <Image src={data?.image} alt="img" width={100} height={100} />
            <p>⭐⭐⭐⭐⭐</p>{" "}
            <span>
              ${data?.price} <del>$ {data?.price * 1.5}</del>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;

"use client";

import { addToCart } from "@/lib/features/slice/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/hearSlice";
import Image from "next/image";
import React from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const DetailWrapper = ({ data }) => {
  let wishlist = useSelector((state) => state.heart.value);

  const dispatch = useDispatch();
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
              <button onClick={() => dispatch(addToCart(data))}>
                <FaCartPlus />
                Add To Cart
              </button>
              <button onClick={() => dispatch(toggleHeart(data))}>
                {wishlist?.some((item) => item.id === data?.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;

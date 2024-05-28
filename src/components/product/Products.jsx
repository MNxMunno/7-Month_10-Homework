"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Products = ({ data }) => {
  // const dispatch = useDispatch();

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
        <button>Li</button>
        <button>Add</button>
      </div>
      <h3 title={el.title}>{el.title}</h3>
    </div>
  ));

  return (
    <section className="product">
      <div className="container">
        <div className="content">
          <h1>BEST SELLER</h1>
          <div className="category__btns"></div>
          <div className="cards">{card}</div>
          <button className="btn">load more</button>
        </div>
      </div>
    </section>
  );
};

export default Products;

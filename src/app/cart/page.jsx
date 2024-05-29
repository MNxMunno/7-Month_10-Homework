"use client";
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "@/lib/features/slice/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addTo = useSelector((s) => s.cart.value);
  console.log(addTo);
  const dispatch = useDispatch();

  const card = addTo?.map((el) => (
    <div className="card" key={el.id}>
      <Image src={el.image} alt={el.title} width={100} height={100} />
      <div className="content">
        <span>{el.date}</span>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
        <div className="btns">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCart(el))}
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button
            disabled={el.quantity >= 10}
            onClick={() => dispatch(addToCart(el))}
          >
            +
          </button>
        </div>
        <button onClick={() => dispatch(removeFromCart(el.id))}>Remove</button>
      </div>
    </div>
  ));
  // console.log(card);
  return (
    <section className="shopCart">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Cart;

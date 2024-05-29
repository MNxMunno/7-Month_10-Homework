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
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addTo = useSelector((s) => s.cart.value);
  console.log(addTo);
  const dispatch = useDispatch();

  const card = addTo?.map((el) => (
    <div className="card" key={el.id}>
      <button onClick={() => dispatch(removeFromCart(el.id))}>
        <TiDeleteOutline style={{ color: "red", fontSize: "32px" }} />
      </button>

      <Image src={el.image} alt={el.title} width={100} height={100} />
      <div className="content">
        <h3>{el.title}</h3>
        <b>${el.price}</b>

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
        <b className="quant">${el.price * el.quantity}</b>
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

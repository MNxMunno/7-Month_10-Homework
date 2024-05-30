"use client";
// import {
//   addToCart,
//   decrementCart,
//   removeFromCart,
// } from "@/lib/features/slice/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import {
  addToCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "@/lib/features/slice/cartSlice";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cart = useSelector((s) => s.cart.value);
  console.log(cart);
  const dispatch = useDispatch();

  let totalPrice = cart
    ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  const inc = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    result = cart.map((item, inx) =>
      inx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(incrementCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };
  const dec = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    result = cart.map((item, inx) =>
      inx === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch(decrementCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };
  const removeCart = (product) => {
    let index = cart.filter((el) => el.id === product.id);
    let result = index;
    dispatch(addToCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };

  const card = cart?.map((el) => (
    <div className="card" key={el.id}>
      <button onClick={() => removeCart(el.id)}>
        <TiDeleteOutline style={{ color: "red", fontSize: "32px" }} />
      </button>

      <Image src={el.image} alt={el.title} width={100} height={100} />
      <div className="content">
        <h3>{el.title}</h3>
        <b>${el.price}</b>

        <div className="btns">
          <button disabled={el.quantity <= 1} onClick={() => dec(el)}>
            -
          </button>
          <span>{el.quantity}</span>
          <button onClick={() => inc(el)}>+</button>
        </div>
        <b className="quant">${totalPrice}</b>
      </div>
    </div>
  ));

  return (
    <section className="shopCart">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Cart;

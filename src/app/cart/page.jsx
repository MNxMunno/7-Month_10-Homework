import React from "react";

const Cart = () => {
  return <div>page</div>;
};

export default Cart;
// "use client";
// // import {
// //   addToCart,
// //   decrementCart,
// //   removeFromCart,
// // } from "@/lib/features/slice/cartSlice";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { TiDeleteOutline } from "react-icons/ti";

// const Cart = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const addTo = useSelector((s) => s.cart.value);
//   console.log(addTo);
//   const dispatch = useDispatch();

//   let totalPrice = addTo
//     ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
//     .toFixed(2);

//   const card = addTo?.map((el) => (
//     <div className="card" key={el.id}>
//       <button onClick={() => dispatch(removeFromCart(el.id))}>
//         <TiDeleteOutline style={{ color: "red", fontSize: "32px" }} />
//       </button>

//       <Image src={el.image} alt={el.title} width={100} height={100} />
//       <div className="content">
//         <h3>{el.title}</h3>
//         <b>${el.price}</b>

//         <div className="btns">
//           <button
//             disabled={el.quantity <= 1}
//             onClick={() => dispatch(decrementCart(el))}
//           >
//             -
//           </button>
//           <span>{el.quantity}</span>
//           <button onClick={() => dispatch(addToCart(el))}>+</button>
//         </div>
//         <b className="quant">${totalPrice}</b>
//       </div>
//     </div>
//   ));

//   return (
//     <section className="shopCart">
//       <div className="container">
//         <div className="cards">{card}</div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

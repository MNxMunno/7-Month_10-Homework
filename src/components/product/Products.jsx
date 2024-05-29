"use client";
import { addToCart } from "@/lib/features/slice/cartSlice";
import { toggleHeart } from "@/lib/features/wishlist/hearSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaCartPlus, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";

const Products = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(data);

  // let wishlist = useSelector((state) => state.heart.value);
  // const navigate = useRouter();
  // const dispatch = useDispatch();

  // const card = data?.map((el) => (
  //   <div key={el.id} className="card">
  //     <Image
  //       className="pro__img"
  //       width={100}
  //       height={100}
  //       src={el.image}
  //       alt="img"
  //     />
  //     <div className="detail__btns">
  //       <button onClick={() => dispatch(toggleHeart(el))}>
  //         {wishlist?.some((item) => item.id === el.id) ? (
  //           <FaHeart style={{ color: "red" }} />
  //         ) : (
  //           <FaRegHeart />
  //         )}
  //       </button>
  //       <button onClick={() => dispatch(addToCart(el))}>
  //         <FaCartPlus />
  //       </button>
  //       <Link href={`/detail/${el.id}`}>
  //         <button onClick={() => navigate.push("/detail")}>
  //           <FaEye />
  //         </button>
  //       </Link>
  //     </div>
  //     <h3 title={el.title}>{el.title}</h3>
  //   </div>
  // ));

  return (
    <section className="product">
      <div className="container">
        <div className="content">
          <h1>BEST SELLER</h1>
          <div className="category__btns"></div>

          <Cart data={data} />

          <button className="btn">load more</button>
        </div>
      </div>
    </section>
  );
};

export default Products;

"use client";
import Products from "@/components/product/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = useSelector((state) => state.heart.value);

  return <Products data={data} />;
};

export default Wishlist;

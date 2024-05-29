"use client";
import Banner from "@/components/banner/Banner";
import FeatureProduct from "@/components/featureProduct/FeatureProduct";
import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import LatestNews from "@/components/latestNews/LatestNews";
import Products from "@/components/product/Products";
import SearchQury from "@/components/searchQuery/SearchQury";
import { getData } from "@/fetch";
import { useEffect, useState } from "react";
// import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function renderData() {
      try {
        const data = await getData("products/?limit=8");
        // console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    renderData();
  }, []);
  return (
    <main>
      <Hero />
      <Products data={data} />
      <Banner />
      <Info />
      <LatestNews />
      <FeatureProduct />
      <SearchQury />
    </main>
  );
}

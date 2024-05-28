import Banner from "@/components/banner/Banner";
import FeatureProduct from "@/components/featureProduct/FeatureProduct";
import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";
import LatestNews from "@/components/latestNews/LatestNews";
import Products from "@/components/product/Products";
import SearchQury from "@/components/searchQuery/SearchQury";
import { getData } from "@/fetch";
import React from "react";

export default async function Home() {
  let data = await getData("products/?limit=8");
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

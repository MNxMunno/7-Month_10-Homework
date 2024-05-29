// "use client";
import Cart from "@/components/cart/Cart";
import DetailWrapper from "@/components/detail-wrapper/DetailWrapper";
import { getData } from "@/fetch";
import { useGetDetailProductsQuery } from "@/lib/features/api/ProductApi";
import React from "react";
import { useParams } from "react-router-dom";

const Detail = async ({ params: { id } }) => {
  let data = await getData(`products/${id}`);
  let data2 = await getData(`products?limit=4`);

  return (
    <div>
      {/* <h3>detaill</h3> */}
      <DetailWrapper data={data} />
      <Cart data={data2} />
    </div>
  );
};

export default Detail;

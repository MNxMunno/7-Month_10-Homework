import DetailWrapper from "@/components/detail-wrapper/DetailWrapper";
import { getData } from "@/fetch";
import React from "react";

const Detail = async () => {
  // let data = await getData(`products/${id}`);

  return (
    <div>
      <h3>detaill</h3>
      <DetailWrapper />
    </div>
  );
};

export default Detail;

import DetailWrapper from "@/components/detail-wrapper/DetailWrapper";
import { getData } from "@/fetch";
import React from "react";

const Detail = async ({ params: { id } }) => {
  let data = await getData(`products/${id}`);

  return (
    <div>
      <h3>detaill</h3>
      <DetailWrapper data={data} />
    </div>
  );
};

export default Detail;

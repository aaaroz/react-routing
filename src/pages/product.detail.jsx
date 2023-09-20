import React, { useState } from "react";
import { db } from "../dummy/data";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const { index } = useParams();

  const productDetail = db.find((product) => product.id === index);
  console.log(productDetail);

  return (
    <section>
      <h3>Product Detail</h3>
      <p>{productDetail.name}</p>
      <p>{productDetail.category}</p>
      <p>{productDetail.freshness}</p>
      <p>${productDetail.price}</p>
    </section>
  );
}

export default ProductDetail;

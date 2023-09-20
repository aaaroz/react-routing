import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing.page";
import CreateProduct from "../pages/create.product";
import ProductDetail from "../pages/product.detail";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-product" index element={<CreateProduct />} />
      <Route path="/product/:index" element={<ProductDetail />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing.page";
import CreateProduct from "../pages/create.product";
import ProductDetail from "../pages/product.detail";
import PrivateRoute from "./private.route";
import LoginPage from "../pages/login.page";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create-product" index element={<CreateProduct />} />
        <Route path="/product/:index" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

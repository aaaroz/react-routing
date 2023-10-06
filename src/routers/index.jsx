import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing.page";
import CreateProduct from "../pages/create.product";
import PrivateRoute from "./private.route";
import LoginPage from "../pages/login.page";
import CreateAccount from "../pages/create.account";
import ProductDetails from "../pages/product.detail";
import ListProduct from "../pages/list.product";
import EditProduct from "../pages/edit.product";
import { ProtectedRoute } from "./protected.route";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create-product" index element={<CreateProduct />} />
        <Route path="/product" index element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/update-product/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductById, selectProduct } from "../store/productSlice";

export default function ProductDetails() {
  const stateProduct = useSelector(selectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      {stateProduct.status === "loading" && <p>Loading...</p>}
      {stateProduct.status === "success" && (
        <div className="container my-3">
          <button className="btn btn-secondary">
            <Link to="/product" className="text-white text-decoration-none">
              back to product list
            </Link>
          </button>
          <h1 className="text-center">Product Details</h1>
          <div className="row mt-5">
            <div className="col-6">
              <h2>{stateProduct.data.productName}</h2>
              <h4>{stateProduct.data.addDescription}</h4>
              <h4>{stateProduct.data.productCategory}</h4>
              <p>{stateProduct.data.productFreshness}</p>
              <p>${stateProduct.data.productPrice}</p>
            </div>
            <div className="col-6">
              <img
                src={stateProduct.data.productImage}
                alt={stateProduct.data.productName}
              />
            </div>
          </div>
        </div>
      )}
      {stateProduct.data.status === "failed" && (
        <div>
          <p>Something Went Wrong</p>
          <p>{stateProduct.data.message}</p>
        </div>
      )}
    </>
  );
}

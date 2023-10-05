import React, { useEffect } from "react";
import { fetchGetProductById, selectProduct } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPutProductById } from "../store/updateProductSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "../schema/product.schema";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function FormEditProduct() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductSchema),
  });

  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setValue("id", `${product.data.id}`);
      setValue("productName", `${product.data.productName}`);
      setValue("productCategory", `${product.data.productCategory}`);
      setValue("addDescription", `${product.data.addDescription}`);
      setValue("productPrice", `${product.data.productPrice}`);
      setValue("productFreshness", `${product.data.productFreshness}`);
      setValue("productImage", `${product.data.productImage}`);
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    if (data.productImage.length === 1) {
      let imageUrl = URL.createObjectURL(data.productImage[0]);
      const newData = data;
      dispatch(
        fetchPutProductById({ ...newData, productImage: imageUrl })
      ).then(() => {
        toast.success("Data Edited Succesfully.");
      });
      navigate("/product");
    } else {
      let imageUrl = product.data.productImage;
      const newData = data;
      dispatch(
        fetchPutProductById({ ...newData, productImage: imageUrl })
      ).then(() => {
        toast.success("Data Edited Succesfully.");
      });
      navigate("/product");
    }
  };

  return (
    <>
      {product.status === "loading" && <p>Loading ...</p>}
      {product.status === "failed" && (
        <div>
          <p>something went wrong</p>
          <p>{product.message}</p>
        </div>
      )}
      {product.status === "success" && (
        <div className="container content">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => navigate("/product")}
            >
              Back To List Product
            </button>
          </div>
          <form id="formUpdate" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 px-5">
              <label htmlFor="id">Product Id</label>
              <input
                type="number"
                id="id"
                className="form-control"
                {...register("id")}
                disabled="disabled"
              />
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                className="form-control"
                {...register("productName")}
              />
              {errors.productName ? (
                <p className="text-danger">{errors.productName.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="selectCategory">Product Category</label>
              <select
                id="selectCategory"
                className="form-select"
                {...register("productCategory")}
              >
                <option value="">Choose one category</option>
                <option value="hoodie">Hoodie</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptop">laptop</option>
              </select>
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="inputFile">Image of Product</label>
              <input
                type="file"
                className="form-control"
                id="inputFile"
                accept="image/png, image/jpg, image/jpeg"
                {...register("productImage")}
              />
            </div>
            <div className="px-5">
              <p>Product Freshness</p>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="brandNew"
                type="radio"
                className="form-check-input"
                value="brand new"
                {...register("productFreshness")}
              />
              <label htmlFor="brandNew" className="form-check-label">
                Brand New
              </label>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="secondHand"
                type="radio"
                className="form-check-input"
                value="secondhand"
                {...register("productFreshness")}
              />
              <label htmlFor="secondHand" className="form-check-label">
                Second Hand
              </label>
            </div>
            <div className="form-check mb-3 ms-4 px-5">
              <input
                id="refurbished"
                type="radio"
                className="form-check-input"
                value="refurbished"
                {...register("productFreshness")}
              />
              <label htmlFor="refurbished" className="form-check-label">
                Refurbished
              </label>
            </div>
            <div className="form-floating mb-3 ms-5 pe-5">
              <textarea
                id="additionalDescription"
                className="form-control"
                placeholder="add your description"
                {...register("addDescription")}
              ></textarea>
              <label htmlFor="additionalDescription">
                Additional Description
              </label>
            </div>
            <div className="ps-5">
              <label htmlFor="price">Product Price</label>
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">$</span>
              <input
                id="price"
                type="number"
                className="form-control"
                {...register("productPrice")}
              />
            </div>
            <div className="d-grid px-5 mb-5">
              <button className="btn btn-primary px-5" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default FormEditProduct;

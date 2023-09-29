import { useState } from "react";
import React from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ProductData } from "../dummy/product.data.js";
import ProductList from "../pages/product.list";

function FormProduct() {
  const emptyData = {
    id: uuidv4(),
    productName: "",
    productCategory: "",
    productFreshness: "",
    addDescription: "",
    productPrice: "",
    productImage: "",
  };

  const [data, setData] = useState(emptyData);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity() || errorMessage !== "") {
      event.preventDefault();
      event.stopPropagation();
      alert("form is not valid");
    } else {
      ProductData.push(data);
      event.preventDefault();
      alert("form submitted!");
      setData(emptyData);
      console.log(ProductData);
    }
    setValidated(true);
  };

  const regexSymbol = /[@#{}$%^&*!(){}|:;'"/.<_,>?]/;
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;

    if (name === "productName") {
      if (regexSymbol.test(value)) {
        setErrorMessage("Product name must not contains symbols");
      } else if (value.length > 25) {
        setErrorMessage("Product name must not exceed 25 characters");
      } else if (value.length === 0) {
        setErrorMessage("Product name must be filled");
      } else {
        setErrorMessage("");
      }
    }

    if (name === "productPrice") {
      if (value > "0") {
        setErrorMessage("");
      } else {
        setErrorMessage("Product price is not valid");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div className="content container px-5 justify-content-center">
        <h3 className="fs-4 mt-5">Detail Product</h3>
        {/* form start */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mb-3 pe-5">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="form-control"
              value={data.productName}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="selectCategory">Product Category</label>
            <select
              name="productCategory"
              id="selectCategory"
              className="form-select"
              value={data.productCategory}
              onChange={handleInput}
              required
            >
              <option value="">Choose one category</option>
              <option value="hoodie">Hoodie</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="jeans">Jeans</option>
            </select>
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="inputFile">Image of Product</label>
            <input
              type="file"
              className="form-control"
              id="inputFile"
              name="productImage"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label>Product Freshness</label>
          </div>
          <div className="form-check">
            <input
              id="brandNew"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="brand new"
              onChange={handleInput}
              checked={data.productFreshness === "brand new"}
              required
            />
            <label htmlFor="brandNew" className="form-check-label">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              id="secondHand"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="second hand"
              onChange={handleInput}
              checked={data.productFreshness === "second hand"}
              required
            />
            <label htmlFor="secondHand" className="form-check-label">
              Second Hand
            </label>
          </div>
          <div className="form-check mb-3 pe-5">
            <input
              id="refurbished"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="refurbished"
              onChange={handleInput}
              checked={data.productFreshness === "refurbished"}
              required
            />
            <label htmlFor="refurbished" className="form-check-label">
              Refurbished
            </label>
          </div>
          <div className="form-floating mb-3 pe-5">
            <textarea
              id="additionalDescription"
              name="addDescription"
              className="form-control"
              placeholder="add your description"
              onChange={handleInput}
              value={data.addDescription}
              required
            ></textarea>
            <label htmlFor="additionalDescription">
              Additional Description
            </label>
          </div>
          <div>
            <label htmlFor="price">Product Price</label>
          </div>
          <div className="input-group mb-3 pe-5">
            <span className="input-group-text">$</span>
            <input
              id="price"
              type="number"
              name="productPrice"
              className="form-control"
              onChange={handleInput}
              value={data.productPrice}
              required
            />
          </div>
          <div className="text-center">
            <p className="text-danger">{errorMessage}</p>
          </div>
          <div className="d-grid mb-3 pe-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
        {/* end of form */}
      </div>
      <div className="container">
        {/* Table */}
        <ProductList productList={ProductData} />
      </div>
    </>
  );
}

export default FormProduct;

import { useRef, useState } from "react";
import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostProducts } from "../store/createProductSlice";
import { useNavigate } from "react-router-dom";

function FormProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyData = {
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
  const inputImg = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity() || errorMessage !== "") {
      event.preventDefault();
      event.stopPropagation();
      alert("form is not valid");
    } else {
      event.preventDefault();
      alert("form submitted!");
      dispatch(
        fetchPostProducts({
          id: nextId++,
          ...data,
        })
      );
      setData(emptyData);
      inputImg.current.value = null;
      setValidated(false);

      const returnTo = "/product";
      navigate(returnTo);
    }
    setValidated(true);
  };

  const regexSymbol = /[@#{}$%^&*!(){}|:;'"/.<_,>?]/;
  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;

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
              ref={inputImg}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <p>Product Freshness</p>
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
          <div className="d-flex mb-5 pe-5 justify-content-center gap-5">
            <button className="btn btn-primary px-5" type="submit">
              Submit
            </button>
            {/* </div> */}
            {/* <div className="d-flex justify-content-center mb-3 pe-5"> */}
            <Link to="/product" className="text-white text-decoration-none">
              <button className="btn btn-secondary px-5" type="button">
                List Product
              </button>
            </Link>
          </div>
        </Form>
        {/* end of form */}
      </div>
    </>
  );
}
let nextId = 1;

export default FormProduct;

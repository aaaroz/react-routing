import { useState } from "react";
import Form from "react-bootstrap/Form";
import ProductList from "../pages/product.list";
import { v4 as uuidv4 } from "uuid";

export default function FormField() {
  // initialize all state
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("brand new");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([
    {
      id: uuidv4(),
      name: "Nikke 1",
      category: "Hoodie",
      freshness: "Brand New",
      price: "28",
    },
    {
      id: uuidv4(),
      name: "Nikke 2",
      category: "T-shirt",
      freshness: "Brand New",
      price: "22",
    },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  //onSubmit event handling
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    //validation check, form is invalid
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert("form field must be filled!");
    }

    //validation for invalid product name
    if (
      event.target.productName.value === "" ||
      productName.length >= 25 ||
      productName.length >= 10
    ) {
      event.preventDefault();
      event.stopPropagation();
      alert("Please enter a valid product name");
    }

    //validation for invalid category and price
    if (productCategory.length === 0 || productPrice.length === 0) {
      alert("form invalid, check again!");
    }

    //form is valid, then create new object
    else {
      const newProduct = {
        id: uuidv4(),
        name: productName,
        category: productCategory,
        freshness: productFreshness,
        price: productPrice,
      };
      alert("Form submited");
      event.preventDefault();

      //set a new object into a state
      setProductList([...productList, newProduct]);
      console.log(productList);
    }
    //set validation form
    setValidated(true);

    //condition for editing a data, then edit a value from existing data
    if (editIndex !== null) {
      const updatedProductList = [...productList];
      updatedProductList[editIndex] = {
        name: productName,
        category: productCategory,
        freshness: productFreshness,
        price: productPrice,
      };
      setProductList(updatedProductList);
      setEditIndex(null);
      alert("data has been edited");
    }

    // reset input values after submitted
    setProductName("");
    setProductCategory("");
    setProductFreshness("brand new");
    setProductPrice("");
  };

  //handle productName onChange
  function handleNameChange(e) {
    setProductName(e.target.value);
    if (productName.length >= 10) {
      setError(e);
    }
    if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters");
      setError(e);
    }
    if (productName.length < 10) {
      setError(null);
    }
  }

  //handle Category onChange
  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  //handle ProductFreschness onChange
  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  //handle productPrice onChange
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  // Handle editProduct onClick
  const handleEditProduct = (index) => {
    const productToEdit = productList[index];
    setProductName(productToEdit.name);
    setProductCategory(productToEdit.category);
    setProductFreshness(productToEdit.freshness);
    setProductPrice(productToEdit.price);
    setEditIndex(index);
  };

  // Handle deleteProduct onClick
  const handleDeleteProduct = (index) => {
    //pop up a notification when deleting
    const isConfirmed = window.confirm(
      "Apakah Anda ingin menghapus data tersebut?"
    );
    if (isConfirmed) {
      const updatedProductList = [...productList];
      updatedProductList.splice(index, 1);
      setProductList(updatedProductList);
    }
  };

  //render
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
              value={productName}
              onChange={handleNameChange}
              required
            />
            {/* conditional rendering, if there's an error, this text would be rendered */}
            {error !== null && (
              <p className="text-center text-danger">
                product name must not exceed 10 characters
              </p>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="selectCategory">Product Category</label>
            <select
              name="selectCategory"
              id="selectCategory"
              className="form-select"
              value={productCategory}
              onChange={handleProductCategoryChange}
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
              name="inputFile"
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
              name="radio"
              className="form-check-input"
              value="brand new"
              checked={productFreshness === "brand new"}
              onChange={handleProductFreshnessChange}
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
              name="radio"
              className="form-check-input"
              value="second hand"
              checked={productFreshness === "second hand"}
              onChange={handleProductFreshnessChange}
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
              name="radio"
              className="form-check-input"
              value="refurbished"
              checked={productFreshness === "refurbished"}
              onChange={handleProductFreshnessChange}
              required
            />
            <label htmlFor="refurbished" className="form-check-label">
              Refurbished
            </label>
          </div>
          <div className="form-floating mb-3 pe-5">
            <textarea
              id="additionalDescription"
              name="additionalDescription"
              className="form-control"
              placeholder="add your description"
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
              name="price"
              className="form-control"
              value={productPrice}
              onChange={handleProductPriceChange}
              required
            />
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
        <ProductList
          productList={productList}
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
        />
      </div>
    </>
  );
}

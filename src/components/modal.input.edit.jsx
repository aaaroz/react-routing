import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ProductSchema } from "../schema/product.schema";
import { fetchPutProductById } from "../store/updateProductSlice";

function ModalInputEdit({ product }) {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);
  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductSchema),
  });

  const onSubmit = (data) => {
    if (data.productImage.length > 0) {
      let imageUrl = URL.createObjectURL(data.productImage[0]);
      const newData = data;
      dispatch(fetchPutProductById({ ...newData, productImage: imageUrl }));
      console.log(data);
    }
    const newData = data;
    dispatch(fetchPutProductById({ ...newData }));
  };

  useEffect(() => {
    if (product) {
      setValue("id", `${product.id}`);
      setValue("productName", `${product.productName}`);
      setValue("productCategory", `${product.productCategory}`);
      setValue("addDescription", `${product.addDescription}`);
      setValue("productPrice", `${product.productPrice}`);
      setValue("productImage", `${product.productImage}`);
      setValue("productFreshness", `${product.productFreshness}`);
    }
  }, []);

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {product ? (
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
                <label>Product Freshness</label>
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
            </form>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            form="formUpdate"
            type="submit"
            onClick={handleClose}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInputEdit;

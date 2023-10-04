import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, selectProducts } from "../store/product/product.slices";
import ModalInputEdit from "../components/modal.input.edit";

function ProductList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-center">List Product</h3>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="fs-7">
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Image</th>
            <th scope="col">Product Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.addDescription}</td>
              <td>
                <img
                  className="align-item-center"
                  src={product.productImage}
                  alt="product image"
                  width={50}
                  height={50}
                />
              </td>
              <td>${product.productPrice}</td>
              <td className="d-flex py-3 gap-1">
                <ModalInputEdit product={product} />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteProduct({ id: product.id }));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ProductList;

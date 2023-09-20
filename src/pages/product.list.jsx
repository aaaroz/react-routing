import { Link } from "react-router-dom";

function ProductList({ productList, handleEditProduct, handleDeleteProduct }) {
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
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>
                <Link to={`/product/${product.id}`}>{index + 1}</Link>
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.freshness}</td>
              <td>${product.price}</td>
              <td className="d-flex">
                <button
                  className="btn btn-primary m-1 fw-medium fs-6"
                  onClick={() => handleEditProduct(index)}>
                  Edit
                </button>
                <button
                  className="btn btn-danger m-1 fw-medium fs-6"
                  onClick={() => handleDeleteProduct(index)}>
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

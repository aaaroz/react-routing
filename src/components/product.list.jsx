import { connect } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchProductList, functionDeleteProduct } from "../products/action";

const ProductList = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete?")) {
      props.removeProduct(id);
      props.fetchProducts();
      toast.success("Product removed successfully.");
    }
  };

  return props.products.loading ? (
    <h2>Loading</h2>
  ) : props.products.error ? (
    <h2>{props.products.error}</h2>
  ) : (
    <>
      <h3 className="text-center">List Product</h3>
      <table className="table table-hover table-bordered">
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
          {props.products.data &&
            props.products.data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.addDescription}</td>
                <td>
                  <img
                    className="align-item-center"
                    src={product.productImage}
                    alt="product"
                    width={80}
                    height={50}
                  />
                </td>
                <td>${product.productPrice}</td>
                <td className="d-flex py-3 gap-1">
                  {/* <ModalInputEdit product={product} /> */}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(product.id);
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
};

const mapStateToProps = (state) => {
  return {
    products: state.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProductList()),
    removeProduct: (id) => dispatch(functionDeleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

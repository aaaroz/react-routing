function ProductList({ productList }) {
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
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.addDescription}</td>
              <td>
                <img
                  className="align-item-center"
                  src={URL.createObjectURL(product.productImage)}
                  alt="product image"
                  width={50}
                  height={50}
                />
              </td>
              <td>${product.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ProductList;

import * as validation from "yup";

export const ProductSchema = validation.object().shape({
  productName: validation
    .string("product name should be a string!")
    .required("product name is required!"),
});

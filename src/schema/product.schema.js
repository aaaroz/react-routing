import * as yup from "yup";

export const ProductSchema = yup.object().shape({
  productName: yup
    .string("product name should be a string!")
    .required("product name is required!"),

  productImage: yup.mixed().test("please select a file", (value) => {
    return value && value.length;
  }),
});

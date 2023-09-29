import * as validation from "yup";

export const RegisterSchema = validation.object().shape({
  firstName: validation
    .string("firstname should be a string")
    .required("firstname is required")
    .min(3, "firstname must exceed 3 characters"),
  lastName: validation
    .string("lastname should be a string")
    .required("lastname is required")
    .min(3, "lastname must exceed 3 characters"),
  username: validation
    .string("username should be a string")
    .required("username is required"),
  email: validation
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email is required"),
  password: validation
    .string("password should be a string")
    .min(8, "password must exceed 8 characters")
    .required("password is required"),
  confirmPassword: validation
    .string("password should be a string")
    .oneOf([validation.ref("password")], "password is not valid")
    .required("password is required"),
});

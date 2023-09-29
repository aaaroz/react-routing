import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../schema/register.schema";

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container content px-5 justify-content-center">
        <h3 className="fs-4 mt-5">Detail Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 pe-5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              {...register("firstName", { required: true })}
            />
            {errors.firstName ? (
              <p className="text-danger text-center">
                {errors.firstName.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              {...register("lastName", { required: true })}
            />
            {errors.lastName ? (
              <p className="text-danger text-center">
                {errors.lastName.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username ? (
              <p className="text-danger text-center">
                {errors.username.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-danger text-center">{errors.email.message}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password ? (
              <p className="text-danger text-center">
                {errors.password.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3 pe-5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword ? (
              <p className="text-danger text-center">
                {errors.confirmPassword.message}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="d-grid mb-3 pe-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegister;

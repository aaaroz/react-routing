import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../schema/register.schema";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  return (
    <>
      <div className="container content justify-content-center">
        <h3 className="fw-bold">Login</h3>
        <form onSubmit={handleSubmit()}>
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

export default FormLogin;

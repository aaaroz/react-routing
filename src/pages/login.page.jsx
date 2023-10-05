import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import Header from "../components/header";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(async (res) => {
      if (res.status === 400)
        return alert("your username or password is wrong");
      const { token } = await res.json();
      auth.storeAuthCredential(token);
      let returnTo = "/";
      return navigate(returnTo);
    });
  };

  return (
    <>
      <Header />
      <div className="container content mt-3">
        <h1 className="text-center">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
              className="form-control"
              autoComplete="username"
              placeholder="enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              autoComplete="current-password"
              placeholder="enter your password"
            />
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

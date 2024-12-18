import { loginAdmin } from "../../api/auth";

import InputField from "../../components/InputField";
import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    loginAdmin(values)
      .then((data) => {
        if (data) {

          
          localStorage.setItem("valid", true);
          navigate("/dashboard");
        } else {
          setError(data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-warning">{error && error}</div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            htmlFor="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <InputField
            label="Password"
            htmlFor="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />

          <button className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
          <div className="text-center mt-3">
            <span>Don't have an account for you business? </span>
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

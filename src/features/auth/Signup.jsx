import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField"; // Assuming you have this component already
import { signupAdmin } from "../../api/auth";

import styles from "../../styles/Login.module.css";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "ADMIN",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Call the signup API
    signupAdmin(values)
      .then((data) => {
        if (data) {
          navigate("/dashboard");
        } else {
          setError(data.Error);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred during signup");
      });
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${styles.loginPage}`}
    >
      <div className="card w-25 shadow-lg">
        <div className="card-body">
          <div className="p-3 loginForm">
            <div className="text-warning">{error && error}</div>
            <h2>Signup Page</h2>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <InputField
                label="Password"
                htmlFor="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <InputField
                label="Confirm Password"
                htmlFor="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={(e) =>
                  setValues({ ...values, confirmPassword: e.target.value })
                }
              />
              <button className="btn btn-primary w-100 rounded-0 mb-2">
                Sign Up
              </button>
              <div className="text-center mt-3">
                <span>Already have an account? </span>
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Log In
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../../../public/sunflowers_logo.svg"; // Adjust the path as needed
import style from "../../../styles/Sidebar.module.css";
const Sidebar = ({ handleLogout }) => {
  return (
    <div
      className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
      style={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        color: "white",
      }}
    >
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
        {/* Brand Logo */}
        <Link
          to="/dashboard"
          className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-decoration-none"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="d-none d-sm-inline"
            style={{
              width: "150px",
              height: "auto",
              backgroundColor: "#ffffff20",
              padding: "10px",
              borderRadius: "10px",
              filter:"invert(1)",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
            }}
          />
        </Link>

        {/* Navigation Menu */}
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="w-100 mb-2">
            <Link
              to="/dashboard"
              className="nav-link px-0 align-middle"
              style={{ color: "white", transition: "0.3s" }}
            >
              <i className="fs-5 bi-house-door ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="w-100 mb-2">
            <Link
              to="/dashboard/employee"
              className="nav-link px-0 align-middle"
              style={{ color: "white", transition: "0.3s" }}
            >
              <i className="fs-5 bi-person-lines-fill ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
            </Link>
          </li>
          <li className="w-100 mb-2">
            <Link
              to="/dashboard/Department"
              className="nav-link px-0 align-middle"
              style={{ color: "white", transition: "0.3s" }}
            >
              <i className="fs-5 bi-building ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Departments</span>
            </Link>
          </li>
          <li className="w-100 mb-2">
            <Link
              to="/dashboard/profile"
              className="nav-link px-0 align-middle"
              style={{ color: "white", transition: "0.3s" }}
            >
              <i className="fs-5 bi-person-circle ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Profile</span>
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="mt-auto w-100">
          <ul className="nav">
            <li className="w-100">
              <button
                onClick={handleLogout}
                className="btn btn-danger w-100"
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                <i className="fs-5 bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

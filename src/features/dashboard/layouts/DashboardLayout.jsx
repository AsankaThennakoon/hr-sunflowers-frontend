import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardLayout = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    // axios.get("http://localhost:8081/auth/logout").then((result) => {
    //   if (result.data.Status) {
    //     localStorage.removeItem("valid");
    //     navigate("/");
    //   }
    // });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar handleLogout={handleLogout} />
        <div className="col p-0 m-0">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

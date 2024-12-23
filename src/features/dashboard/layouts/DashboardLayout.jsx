import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import apiClient from "../../../api/axiosConfig";
const DashboardLayout = () => {
  const navigate = useNavigate();
  apiClient.defaults.withCredentials = true;

  const handleLogout= async () => {
    try {
        const token = localStorage.getItem('authToken');
        await apiClient.post('/auth/logout', {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
        localStorage.removeItem('authToken'); // Clear token
        navigate('/'); // Redirect
    } catch (error) {
        console.error("Logout failed:", error);
    }
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

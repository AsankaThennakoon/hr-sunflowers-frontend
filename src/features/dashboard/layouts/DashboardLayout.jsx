import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState,useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import apiClient from "../../../api/axiosConfig";
const DashboardLayout = () => {
  const navigate = useNavigate();
  apiClient.defaults.withCredentials = true;
  const [profile, setProfile] = useState({
    businessName: "",
    logo: "",
  });
  useEffect(() => {
    // Load profile data from localStorage or fetch it from an API
    const savedProfile = localStorage.getItem("businessProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // Optional: Fetch from API if not available in localStorage
      // Example:
      // apiClient.get('/profile').then(response => {
      //   setProfile(response.data);
      // });
    }
  }, []);

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
        <Header profile={profile} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

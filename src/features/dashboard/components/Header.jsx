import React from "react";

const Header = ({ profile }) => {
  return (
    <div className="p-2 d-flex justify-content-between align-items-center shadow bg-light">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <img
          src={profile.logo || "https://via.placeholder.com/50"}
          alt="Business Logo"
          className="rounded-circle"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <h4 className="ms-3 mb-0">{profile.businessName || "HR System"}</h4>
      </div>

      {/* Tagline or additional information */}
      <div className="text-center">
        <h6 className="mb-0 text-muted">Efficient HR Management </h6>
      </div>

      {/* User Actions */}
      <div>
        <button className="btn btn-primary btn-sm me-2">Profile</button>
        <button className="btn btn-danger btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default Header;

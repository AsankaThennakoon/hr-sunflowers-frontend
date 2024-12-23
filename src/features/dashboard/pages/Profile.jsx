import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(() => {
    // Load data from localStorage
    const savedProfile = localStorage.getItem("businessProfile");
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          businessName: "",
          email: "",
          phone: "",
          address: "",
          logo: "",
          coverPhoto: "",
        };
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Simulating file upload and setting the URL (Replace this with actual upload logic)
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, [type]: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the profile changes
    // Save data to localStorage
    localStorage.setItem("businessProfile", JSON.stringify(profile));
    setIsEditing(false);
    setSuccess("Profile updated successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="position-relative">
        {/* Cover Photo */}
        <div
          className="cover-photo"
          style={{
            height: "200px",
            backgroundColor: "#f0f0f0",
            backgroundImage: `url(${profile.coverPhoto || "https://via.placeholder.com/1200x400"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        >
          {isEditing && (
            <label
              htmlFor="coverPhoto"
              className="btn btn-secondary position-absolute top-0 end-0 m-2"
            >
              Change Cover Photo
              <input
                type="file"
                id="coverPhoto"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "coverPhoto")}
              />
            </label>
          )}
        </div>

        {/* Logo */}
        <div
          className="logo-wrapper position-absolute"
          style={{
            top: "150px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src={profile.logo || "https://via.placeholder.com/150"}
            alt="Business Logo"
            className="rounded-circle border border-white"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
          {isEditing && (
            <label
              htmlFor="logo"
              className="btn btn-secondary btn-sm mt-2 d-block mx-auto"
            >
              Change Logo
              <input
                type="file"
                id="logo"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "logo")}
              />
            </label>
          )}
        </div>
      </div>

      <div className="mt-5 text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {!isEditing ? (
          <div>
            <h3>{profile.businessName}</h3>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5">
          
            <div className="mb-5">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                className="form-control"
                name="businessName"
                value={profile.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;

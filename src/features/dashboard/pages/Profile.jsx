import React, { useState, useEffect } from "react";
// import {  getBusinessProfile,updateBusinessProfile  } from "../../../api/profile";

const Profile = () => {
  const [profile, setProfile] = useState({
    businessName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // useEffect(() => {
  //   // Fetch profile data on component mount
  //   getBusinessProfile()
  //     .then((data) => setProfile(data))
  //     .catch((err) => setError("Failed to fetch profile data."));
  // }, []);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateBusinessProfile(profile)
    //   .then((data) => {
    //     setProfile(data);
    //     setIsEditing(false);
    //     setSuccess("Profile updated successfully!");
    //   })
    //   .catch((err) => setError("Failed to update profile."));
  };

  return (
    <div className="container mt-5">
      <h2>Business Profile</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {!isEditing ? (
        <div>
          <p><strong>Business Name:</strong> {profile.businessName}</p>
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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
  );
};

export default Profile;

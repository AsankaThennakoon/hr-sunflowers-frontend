import apiClient from '../../api/axiosConfig';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditDepartment = () => {
  const { id } = useParams(); // Retrieve the department ID from the URL
  const [department, setDepartment] = useState({
    name: '',
    location: '',
    numberOfEmployee: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch department details when the component loads
    const fetchDepartment = async () => {
      try {
        const response = await apiClient.get(`/department/getDepartment/${id}`);
        setDepartment(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load department details.');
      }
    };

    fetchDepartment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.put(`/department/updateDepartment?id=${id}`, department);
      if (response.status === 200) {
        navigate('/dashboard/Department');
      } else {
        setError(response.data.Error || 'Failed to update department');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while updating the department.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Department</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Department Name:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              name="name"
              placeholder="Enter department name"
              value={department.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="location"
              name="location"
              placeholder="Enter location"
              value={department.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="numberOfEmployee" className="form-label">
              Number of Employees:
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="numberOfEmployee"
              name="numberOfEmployee"
              placeholder="Enter number of employees"
              value={department.numberOfEmployee}
              onChange={handleChange}
              required
              min="1"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Update Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDepartment;

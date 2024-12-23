import apiClient from '../../api/axiosConfig';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    name: '',
    location: '',
    numberOfEmployee: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post('/department/addDepartment', department);
      if (response.status === 201) {
        navigate('/dashboard/Department');
      } else {
        setError(response.data.Error || 'Failed to add department');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while adding the department.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Department</h3>
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
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;

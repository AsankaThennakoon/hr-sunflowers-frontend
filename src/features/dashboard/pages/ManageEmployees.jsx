
import DashboardLayout from "../layouts/DashboardLayout";
import axios from '../../../api/axiosConfig'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ManageEmployees = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8081/employee/employee")
      .then((result) => {
        console.log(result.data);
        if (result.data) {
          setEmployee(result.data);
        } else {
         
          alert(result.data.Error);

        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8081/employee/deleteEmployee`, {
        params: { id }, // Add query parameter here
      })
      .then((result) => {
        if (result.status === 200) {
          // Update the state to remove the deleted employee
          setEmployee((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
          alert("Employee deleted successfully!");
        } else {
          alert("Failed to delete the employee.");
        }
      })
      .catch((err) => {
        console.error(err); // Log any errors for debugging
        alert("Failed to delete the employee. Please try again.");
      });
  };
  
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:8081/Images/` + e.image}
                    className="employee_image"
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployees;

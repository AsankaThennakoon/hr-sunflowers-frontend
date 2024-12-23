import apiClient from "../../../api/axiosConfig";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Department = () => {
  const [Department, setDepartment] = useState([]);

  useEffect(() => {
    apiClient
      .get("/department/department")
      .then((result) => {
        if (result.status == 200) {
          setDepartment(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id) => {
    apiClient
      .delete(`/department/deleteDepartment`, {
        params: { id }, // Add query parameter here
      })
      .then((result) => {
        if (result.status === 200) {
          // Update the state to remove the deleted employee
          setDepartment((preDepartment) => 
            preDepartment.filter((dep) => dep.department_id !== id)
          );
          alert("Department deleted successfully!");
        } else {
          alert("Failed to delete the department.");
        }
      })
      .catch((err) => {
        console.error(err); // Log any errors for debugging
        alert("Failed to delete the Department. Please try again.");
      });}
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Department List</h3>
      </div>
      <Link to="/dashboard/add_Department" className="btn btn-success">
        Add Department
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Locations</th>
              <th>Number of Employees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Department.map((c,index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.location}</td>
                <td>{c.numberOfEmployee}</td>
                {/* <td>{c.department_id==null?"hello":c.department_id}</td> */}
                
                <td>
                  <Link
                    to={`/dashboard/edit_department/` + c.department_id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(c.department_id)}
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

export default Department;

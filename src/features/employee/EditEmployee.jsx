import apiClient from '../../api/axiosConfig'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        category_id: "",
      });
      const [category, setCategory] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        // apiClient.get('/auth/category')
        // .then(result => {
        //     if(result.data.Status) {
        //         setCategory(result.data.Result);
        //     } else {
        //         alert(result.data.Error)
        //     }
        // }).catch(err => console.log(err))

        apiClient.get('/employee/getEmployee/'+id)
        .then(result => {

          console.log(result);
            setEmployee({
                ...employee,
                name: result.data.name,
                email: result.data.email,
                address: result.data.address,
                salary: result.data.salary,
                category_id: result.data.category_id,
            })
        }).catch(err => console.log(err))

       
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        // Append the employee object as a JSON string
        const employeeData = JSON.stringify({
          name: employee.name,
          email: employee.email,
          password: employee.password,
          address: employee.address,
          salary: employee.salary,
          position: employee.position,
          categoryId: 1, // Assuming this is fixed for now
        });
      
        formData.append("employee", employeeData);
        formData.append("image", employee.image); // Append the file directly
      
        apiClient
          .put(`/employee/updateEmployee?id=${id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Required for sending form-data
            },
          })
          .then((result) => {
            if (result.status === 200) {
              navigate("/dashboard/employee"); // Navigate to the employee dashboard on success
            } else {
              alert("Error: Unable to update employee.");
            }
          })
          .catch((err) => {
            console.error("Error while updating employee:", err);
            alert("Failed to update employee. Please try again.");
          });
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label">
              Category
            </label>
            <select name="category" id="category" className="form-select"
                onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee
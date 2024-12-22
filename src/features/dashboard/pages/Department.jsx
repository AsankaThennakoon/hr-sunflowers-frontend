import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Department = () => {

    const [Department, setDepartment] = useState([])

    useEffect(()=> {
        // axios.get('http://localhost:8081/auth/Department')
        // .then(result => {
        //     if(result.data.Status) {
        //         setDepartment(result.data.Result);
        //     } else {
        //         alert(result.data.Error)
        //     }
        // }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Department List</h3>
        </div>
        <Link to="/dashboard/add_Department" className='btn btn-success'>Add Department</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Locations</th>
                        <th>Number of Employees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Department.map(c => (
                            <tr>
                                <td>{c.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Department
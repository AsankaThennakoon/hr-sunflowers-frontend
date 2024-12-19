import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

import {
  Dashboard,
  ManageEmployees,
  Profile,
  Category,DashboardHome
} from "./features/dashboard";
import AddCategory from "./features/departments/AddCategory";
import AddEmployee from "./features/employee/AddEmployee";
import EditEmployee from "./features/employee/EditEmployee";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='' element={<DashboardHome />}></Route>
          <Route path="employee" element={<ManageEmployees />} />
          <Route path="category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add_category" element={<AddCategory />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<EditEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

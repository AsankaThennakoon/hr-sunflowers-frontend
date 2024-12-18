import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

import {
  Dashboard,
  ManageEmployees,
  Profile,
  Category,DashboardHome
} from "./features/dashboard";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

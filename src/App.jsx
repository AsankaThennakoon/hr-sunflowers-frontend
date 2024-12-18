import Login from './pages/Login';
import Signup from './pages/Signup';

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
  
}

export default App

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="bg-[#040444]">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;

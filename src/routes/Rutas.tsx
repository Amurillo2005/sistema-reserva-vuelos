import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewFlights from "../pages/ViewFlights/ViewFlights";
import { Register } from "../pages/Register/Register.jsx";
import { Login } from "../pages/Login/Login.jsx";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/vuelos" element={<ViewFlights />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Rutas;

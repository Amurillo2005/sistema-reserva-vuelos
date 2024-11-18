import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewFlights from "../pages/ViewFlights/ViewFlights";
import { Register } from "../pages/Register/Register.jsx";
import { Login } from "../pages/Login/Login.jsx";
import { TarjetaVuelo } from "../pages/Card/TarjetaVuelo.jsx";

const Rutas = () => {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/vuelos" element={<ViewFlights />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/TarjetaVuelo" element={<TarjetaVuelo />} />
          </Routes>
        </Router >
    </>
  );
};

export default Rutas;

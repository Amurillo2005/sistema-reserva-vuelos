import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewFlights from "../pages/ViewFlights";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/vuelos" element={<ViewFlights />} />
      </Routes>
    </Router>
  );
};

export default Rutas;

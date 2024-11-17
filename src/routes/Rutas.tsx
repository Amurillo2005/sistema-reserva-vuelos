import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewFlights from "../pages/ViewFlights/ViewFlights";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/my-flights" element={<ViewFlights />} />
      </Routes>
    </Router>
  );
};

export default Rutas;

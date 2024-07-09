import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import PrivateRoutes from "./route/protectedRoute";
import Login from "./pages/login";
import PublicRoutes from "./route/publicRoute";
import Register from "./pages/register";

const ReactRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/login/:user" element={<Login />} />
        <Route path="/register/:user" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default ReactRoutes;
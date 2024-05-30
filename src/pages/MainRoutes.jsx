import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import EditPage from "./EditPage";
import ProductDetails from "../components/ProductDetails";
import Layout from "./Layout";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h3>404 Page not found</h3>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;

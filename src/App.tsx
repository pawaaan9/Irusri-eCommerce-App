import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/Auth/login"; 
import Register from "./components/Auth/register"; 
import Products from "./components/Home/products"; 
import ShoppingCart from "./components/Cart/shoppingCart"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/cart" element={<ShoppingCart />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

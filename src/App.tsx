import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/login"; // Your login component
import Register from "./components/Auth/register"; // Your register component

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> {/* Login route */}
      <Route path="/register" element={<Register />} /> {/* Register route */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;

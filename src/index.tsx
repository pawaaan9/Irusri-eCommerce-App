import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Create root with createRoot API
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
  
);

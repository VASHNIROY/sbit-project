import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./Componets/LoginPage/loginpage.jsx";

const router = createBrowserRouter([
  {
    path: "/adminpanel",
    // element: <AdminPanel />,
  },
  {
    path: "/adminlogin",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

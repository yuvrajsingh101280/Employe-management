import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/admin-dashboard" /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

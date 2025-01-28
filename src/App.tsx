import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requireAdmin={true}>
        /* bỏ requireAdmin nếu muốn coi layout admin */
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <div>Admin Dashboard</div>,
      },
      {
        path: "/admin/users",
        element: <div>Manage Users</div>,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

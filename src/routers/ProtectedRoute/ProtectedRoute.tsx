import React from "react";
import { Navigate } from "react-router-dom";

// Hàm kiểm tra quyền.
const isAuthenticated = () => {
  // Kiểm tra người dùng đã đăng nhập.
  // Lấy thông tin từ localStorage hoặc context API.
  return !!localStorage.getItem("token");
};

const isAdmin = () => {
  // Kiểm tra quyền admin (giả sử role được lưu trong localStorage).
  const role = localStorage.getItem("role");
  return role === "admin";
};

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean; // Kiểm tra quyền admin nếu cần
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

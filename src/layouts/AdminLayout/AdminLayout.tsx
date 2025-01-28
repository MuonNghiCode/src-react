import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./AdminLayout.scss";

const AdminLayout: React.FC = () => {
  return (
    <>
      <div className="admin-header-layout">
        <AdminHeader />
        <div className="sidebar-layout">
          <Sidebar />
          <main className="admin-main-layout">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

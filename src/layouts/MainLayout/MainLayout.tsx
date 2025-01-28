import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./MainLayout.scss";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="header-layout">
        <Header />
        <main className="main-layout">
          <Outlet />
        </main>
        <div className="footer-layout">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

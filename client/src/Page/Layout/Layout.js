import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <Outlet />
        <Widget />
      </div>
    </div>
  );
}

export default Layout;

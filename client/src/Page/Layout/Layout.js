import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import TopLinks from "../../Components/Feed/TopLinks/TopLinks";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />

        <div className="layout_center">
          <TopLinks />

          <Outlet />
        </div>

        <Widget />
      </div>
    </div>
  );
}

export default Layout;

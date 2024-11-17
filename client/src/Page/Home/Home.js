import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Widget from "../../Components/Widget/Widget";

function Home() {
  return (
    <div className="home-body">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default Home;

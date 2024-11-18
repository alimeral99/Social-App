import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Widget from "../../Components/Widget/Widget";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="home-body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Home;

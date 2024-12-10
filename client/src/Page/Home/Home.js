import React from "react";
import "./Home.css";

import Feed from "../../Components/Feed/Feed";
import Header from "../../Components/Header/Header";
import Widget from "../../Components/Widget/Widget";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home">
      <Feed />
    </div>
  );
}

export default Home;

import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Feed from "../../Feed/Feed";
import Widget from "../../Widget/Widget";

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

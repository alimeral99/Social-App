import React from "react";
import "./Widget.css";
import FakeAd from "./FakeAd/FakeAd";

function Widget(content) {
  return (
    <div className="widget">
      <FakeAd content="https://static-cse.canva.com/blob/1101020/create_ad-maker_lead.a2ca464d.jpg" />
      <FakeAd content=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zCnXYi8r3fNyVG2v4evhm08EFpPddRA0qQ&s" />
      <FakeAd content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_l2IaT_LtD5n93vli_crEEh9lv4NiIXbgQ&s" />
    </div>
  );
}

export default Widget;

import React from "react";
import "./FakeAd.css";

function FakeAd({ content }) {
  return (
    <div className="fakeAd">
      <img src={content} alt="ad_img" />
      <button>Advertisement</button>
    </div>
  );
}

export default FakeAd;

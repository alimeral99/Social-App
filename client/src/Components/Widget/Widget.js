import React, { useState, useEffect } from "react";
import "./Widget.css";
import FakeAd from "./FakeAd/FakeAd";

function Widget() {
  const [visibleAds, setVisibleAds] = useState([0, 1]);

  const ads = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zCnXYi8r3fNyVG2v4evhm08EFpPddRA0qQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_l2IaT_LtD5n93vli_crEEh9lv4NiIXbgQ&s",
    "https://www.gezginajans.com/wp-content/uploads/2023/12/iyi-bir-reklam-gorseli-nasil-olmalidir-1158x576.jpg",
    "https://www.crmmedya.com/wp-content/uploads/2019/02/dijital-reklam.png",
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      setVisibleAds([2, 3]);
    } else if (scrollPosition > 400) {
      setVisibleAds([3, 3]);
    } else {
      setVisibleAds([0, 1]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="widget">
      {visibleAds.map((adIndex) => (
        <FakeAd content={ads[adIndex]} />
      ))}
    </div>
  );
}

export default Widget;

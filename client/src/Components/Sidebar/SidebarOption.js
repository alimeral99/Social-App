import React from "react";
import "./SidebarOption.css";

function SidebarOption() {
  return (
    <div className="sidebar-options">
      <div className="sidebar-option">
        <img
          src="https://www.totaltek.com/wp-content/uploads/2022/01/Computer-Programming-Languages.jpg"
          alt=""
        />
        <p>computer programming</p>
      </div>

      <div className="sidebar-option">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
          alt=""
        />

        <p>business</p>
      </div>

      <div className="sidebar-option">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT7TihH8pQbG7NFAR15gGEodwBJUqTDl2Og&s"
          alt=""
        />
        <p>cooking</p>
      </div>

      <div className="sidebar-option">
        <img
          src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
          alt=""
        />
        <p>technology</p>
      </div>

      <div className="sidebar-option">
        <img
          src="https://poolegrammar.com/wp-content/uploads/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg"
          alt=""
        />
        <p>science</p>
      </div>
    </div>
  );
}

export default SidebarOption;

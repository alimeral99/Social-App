import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption
        category={"health"}
        imageLink={
          "https://www.totaltek.com/wp-content/uploads/2022/01/Computer-Programming-Languages.jpg"
        }
      />
      <SidebarOption
        category={"business"}
        imageLink={
          "https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
        }
      />
      <SidebarOption
        category={"cooking"}
        imageLink={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT7TihH8pQbG7NFAR15gGEodwBJUqTDl2Og&s"
        }
      />
      <SidebarOption
        category={"technology"}
        imageLink={
          "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
        }
      />
      <SidebarOption
        category={"science"}
        imageLink={
          "https://poolegrammar.com/wp-content/uploads/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg"
        }
      />
    </div>
  );
}

export default Sidebar;

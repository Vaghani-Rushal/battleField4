import React from "react";
import LeftMenubar from "../../components/LeftMenubar";
import Menubar from "../../components/Menubar";
import Rightbar from "../../components/Rightbar";

const QuickMatch = () => {
  return (
    <div
      className="relative w-full h-screen flex bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-50"
      style={{ backgroundImage: 'url("/images/menu__background.jpg")' }}
    >
      <LeftMenubar />
      <Menubar />
      <Rightbar />
    </div>
  );
};

export default QuickMatch;

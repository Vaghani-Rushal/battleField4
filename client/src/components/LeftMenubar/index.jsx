import React from "react";
import logo1 from "../../images/side-menu__game.png";
import logo2 from "../../images/side-menu__game (1).png";
import logo3 from "../../images/side-menu__game (2).png";
import logo4 from "../../images/side-menu__game (3).png";
import logo5 from "../../images/Vector.png";
import logo6 from "../../images/side-menu.png";
import logout from "../../images/Vector (1).png";

const LeftMenubar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-1/20 pt-24 flex flex-col items-center border-r border-gray-400">
      <div className="flex flex-col cursor-pointer gap-2.5 items-center">
        <div className="w-full px-2.5 flex justify-center items-center opacity-50 hover:opacity-100">
          <img src={logo1} alt="logo1" className="h-7.5" />
        </div>
        <div className="w-full px-2.5 flex justify-center items-center opacity-50 hover:opacity-100">
          <img src={logo2} alt="logo2" className="h-7.5" />
        </div>
        <div className="w-full px-2.5 flex justify-center items-center border-l-2 border-orange-500">
          <img src={logo3} alt="logo3" className="h-7.5" />
        </div>
        <div className="w-full px-2.5 flex justify-center items-center opacity-50 hover:opacity-100">
          <img src={logo4} alt="logo4" className="h-7.5" />
        </div>
        <div className="w-full px-2.5 flex justify-center items-center opacity-50 hover:opacity-100">
          <img src={logo5} alt="logo5" className="h-7.5" />
        </div>
        <div className="w-full px-2.5 flex justify-center items-center opacity-50 hover:opacity-100">
          <img src={logo6} alt="logo6" className="h-7.5" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-48 gap-7.5">
        <div className="flex items-center justify-center w-5 h-5 bg-gray-400 text-blue-900 text-xs font-bold rounded-full">
          ?
        </div>
        <div className="mt-4">
          <img src={logout} alt="logout" className="h-7.5" />
        </div>
      </div>
    </div>
  );
};

export default LeftMenubar;

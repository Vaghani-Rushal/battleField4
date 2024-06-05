import React, { useState } from "react";

import demoImg from "../../images/main-screen__background.jpg";

const FlatList = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className="list-none text-white uppercase text-xs font-semibold font-rajdhani">
      {items?.length > 0 &&
        items?.map((item, index) => (
          <li
            key={index}
            style={item.style || {}}
            className="flex items-center px-1 h-10 border-t border-white/10 pl-4.5 w-88 hover:bg-white hover:text-black"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.title}
            {hoveredIndex === index && (
              <div className="fixed top-28 left-[25rem] h-auto w-[31.25rem]">
                <div className="w-[31.25rem]">
                  <img
                    src={demoImg}
                    style={{ height: 180, width: "100%" }}
                    alt="Demo"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-2xl text-white">{item.title}</div>
                  <div className="text-[12px] text-white mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default FlatList;

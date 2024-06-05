import React, { useState } from "react";
import Profile from "./Profile";

const ProfileData = [
  {
    id: 1,
    icon: "/images/rightBar/squad.png",
    image: "/images/rightBar/join.png",
    name: "Squad Join",
    type: "SQUAD",
    status: "",
  },
  {
    id: 2,
    icon: "/images/rightBar/online.png",
    image: "/images/rightBar/profile-image-1.png",
    name: "MaryJane",
    type: "Online",
    status: "Online",
  },
  {
    id: 3,
    icon: "/images/rightBar/offline.png",
    image: "/images/rightBar/profile-image-2.png",
    name: "420",
    type: "Offline",
    status: "Offline",
  },
];

const Rightbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  return (
    <div
      className="fixed top-0 bottom-0 right-0 flex flex-col justify-start pt-[3.5vh] pl-[1.5vh] gap-2.5 w-[8vh] hover:w-[30vh]  hover:bg-gray-900 transition-all h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      {ProfileData?.map((data) => {
        return (
          <Profile key={data?.id} profileData={data} isVisible={isVisible} />
        );
      })}
    </div>
  );
};

export default Rightbar;

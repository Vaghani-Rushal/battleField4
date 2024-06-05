import React from "react";

const Profile = ({ profileData, isVisible }) => {
  return (
    <div className="flex flex-col gap-[10px] w-[100px]">
      <div className="flex items-center gap-[10px]">
        <img src={profileData?.icon} alt="rightbar" className="h-[10px]" />
        {isVisible && (
          <div className="text-white text-xs font-bold">
            {profileData?.type}
          </div>
        )}
      </div>
      <div className="flex gap-2.5 w-[210%] text-white group">
        <img
          src={profileData?.image}
          alt="rightbar"
          className="h-10 w-1/5 opacity-80 group-hover:opacity-100"
        />
        <div className="flex flex-col justify-center p-1 group-hover:bg-white group-hover:text-black w-full">
          <div
            className={`text-xs font-bold ${
              profileData?.type === "Offline" ? "opacity-50" : ""
            }`}
          >
            {profileData?.name}
          </div>
          <div
            className={`text-xs font-bold ${
              profileData?.type === "Offline" ? "opacity-50" : ""
            }`}
          >
            {profileData?.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

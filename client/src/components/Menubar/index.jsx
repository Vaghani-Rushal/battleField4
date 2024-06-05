import React, { useEffect, useState } from "react";
import axios from "axios";
import back from "../../images/back.png";
import FlatList from "./FlatList";

const Menubar = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://battlefield4-mqov.onrender.com/api/all-list"
        );
        setLists(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fixed top-0 left-[6%] h-full w-[18%] flex flex-col gap-5">
      <div className="p-3.5 pl-10 flex flex-col justify-center">
        <div className="flex items-center gap-2.5 text-white text-xs font-semibold font-rajdhani px-2">
          <img src={back} alt="back" />
          <div>MULTIPLAYER</div>
          <div>/</div>
        </div>
        <div className="text-white text-2xl font-semibold font-rajdhani">
          QUICKMATCH
        </div>
      </div>
      <div id="style-1" className="h-full overflow-auto overflow-x-hidden">
        <FlatList items={lists} />
      </div>
    </div>
  );
};

export default Menubar;

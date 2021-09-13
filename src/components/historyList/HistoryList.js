import React from "react";
import "./historyList.css";

export const HistoryList = ({ locationStore }) => {
  return (
    <div className="history-search-block">
      <h4> History of all searches </h4>
  
        {locationStore.allLocations.map((location) => (
          <div key={location.ip + Math.random(100)}>
            {" "}
            <span>{location.ip}</span>
          </div>
        ))}
     
    </div>
  );
};

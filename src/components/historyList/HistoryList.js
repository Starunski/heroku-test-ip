import React from "react";
import "./historyList.css";

export const HistoryList = ({ locationStore }) => {
  return (
    <div className="history-search-block">
     <h4> History of all searches </h4>
      <ul>
        {locationStore.allLocations.map((location) => (
          <li key={location.ip + Math.random(100)}>{location.ip}</li>
        ))}
      </ul>
    </div>
  );
};

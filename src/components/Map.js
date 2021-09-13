import React  from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import userLogo from "../assets/user.png";


export const Map = ({ viewport, setViewport }) => {
  if (viewport.latitude === undefined) {
    return null;
  }
  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
  
      onViewportChange={setViewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic3RhcmExOTkxIiwiYSI6ImNrdGVjaWZzazJvaDcycGpwZHo4Z21mMGQifQ.DTIaEv6wG8gWm8D2lLHy_A"
    
    >
      {viewport && (
        <Marker
          key={"MARKER"}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
        >
          <img src={userLogo} alt={userLogo} style={{ width: "20px" }} />
        </Marker>
      )}
      ;
    </ReactMapGL>
  );
};

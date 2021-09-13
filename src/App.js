import { useEffect, useState } from "react";
import "./App.css";
import { getUserLocation } from "./store/location/location.thunks";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch  } from "react-redux";
import { selectLocation } from "./store/location";
import { setLastSearch, addToAllSearch } from "./store/location";
import { Map } from "./components/Map";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { HistoryList } from "./components/historyList/HistoryList";

const App = () => {
  const locationStore = useSelector(selectLocation);
  const dispatch = useDispatch();
  const reg =
    "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";

  const [viewport, setViewport] = useState({
    longitude: locationStore.currentLocation.longitude,
    latitude: locationStore.currentLocation.latitude,
    zoom: 14,
  });

  const [lastViewport, setLastViewport] = useState({
    longitude:
      locationStore.lastSearchLocation &&
      locationStore.lastSearchLocation.longitude,
    latitude:
      locationStore.lastSearchLocation &&
      locationStore.lastSearchLocation.latitude,
    zoom: 14,
  });

  const [ip, setIp] = useState("");
  const options = {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 0,
  };

  const getBrowserPosition = (pos) => {
    const data = pos.coords;
    console.log(`data:`, data);
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const onHandelSearch = () => {
    dispatch(getUserLocation(ip));
    dispatch(setLastSearch());
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getBrowserPosition,
      error,
      options
    );
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {locationStore.allLocations.length !== 0 && (
          <HistoryList locationStore={locationStore} />
     
        )}
        <div className="wrapper-block">
          <div className="info-block">
            <div className="map-block">
              {" "}
              <Map
                viewport={{
                  longitude: locationStore.currentLocation.longitude,
                  latitude: locationStore.currentLocation.latitude,
                  zoom: 10,
                }}
                setViewport={setViewport}
              />{" "}
            </div>
            <div className="data-block">
              {locationStore.allLocations.length !== 0 && (
                <ul>
                  <li>City: {locationStore.currentLocation.city}</li>{" "}
                  <li>ip: {locationStore.currentLocation.ip}</li>
                  <li>zip-code: {locationStore.currentLocation.zip}</li>
                  <li>latitude: {locationStore.currentLocation.latitude}</li>
                  <li>longitude: {locationStore.currentLocation.longitude}</li>
                  <li>country: {locationStore.currentLocation.country_name}</li>
                </ul>
              )}
            </div>
          </div>
          <div className="search-block">
            <div className="search-input">
              <TextField
                className="input"
                placeholder="search box"
                onChange={(e) => setIp(e.target.value)}
                value={ip}
                // variant=""
                label="IP"
                error={ip !== "" && !ip.match(reg)}
                helperText={
                  ip !== "" && !ip.match(reg)
                    ? "IP Address must be a correct string."
                    : " "
                }
              />

              <Button
                onClick={onHandelSearch}
                variant="contained"
                color="primary"
                disabled={!ip ? true : false}
              >
                Search
              </Button>
            </div>
          </div>
          <div className="info-block">
            <div className="map-block">
              <Map
                viewport={{
                  longitude:
                    locationStore.lastSearchLocation &&
                    locationStore.lastSearchLocation.longitude,
                  latitude:
                    locationStore.lastSearchLocation &&
                    locationStore.lastSearchLocation.latitude,
                  zoom: 10,
                }}
                setViewport={setLastViewport}
              />
            </div>
            <div className="data-block">
              {locationStore.allLocations.length !== 0 &&
                locationStore.lastSearchLocation && (
                  <ul>
                    <li>City: {locationStore.lastSearchLocation.city}</li>
                    <li>ip: {locationStore.lastSearchLocation.ip}</li>
                    <li>zip-code: {locationStore.lastSearchLocation.zip}</li>
                    <li>
                      latitude: {locationStore.lastSearchLocation.latitude}
                    </li>
                    <li>
                      longitude: {locationStore.lastSearchLocation.longitude}
                    </li>
                    <li>
                      country: {locationStore.lastSearchLocation.country_name}
                    </li>
                  </ul>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

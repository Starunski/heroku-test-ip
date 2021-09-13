import { createSlice } from "@reduxjs/toolkit";

import { getUserLocation } from "./location.thunks";

export const locationSlice = createSlice({
  name: "[LOCATION]",
  initialState: {
    currentLocation: {},
    allLocations: [],
    lastSearchLocation: {},
  },
  reducers: {
    SET_LAST_SEARCH: (state) => {
     
    
    },
  },
  extraReducers: {
    [getUserLocation.fulfilled]: (state, { payload }) => {
      state.currentLocation = payload;
      state.allLocations = [...state.allLocations, payload];
      state.lastSearchLocation = state.allLocations[state.allLocations.length - 2];

 
    },
  },
});

export const {
  SET_LAST_SEARCH: setLastSearch,
  ADD_TO_ALL_SEARCH: addToAllSearch,
} = locationSlice.actions;

export default locationSlice.reducer;

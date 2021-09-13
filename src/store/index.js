import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location/location.reducer";

export default configureStore({
  reducer: {
    location: locationReducer,
  },
});

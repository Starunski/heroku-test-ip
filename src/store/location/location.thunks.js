import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/apiService";


export const getUserLocation = createAsyncThunk(
  '[LOCATION] GET_USER_LOCATION',
  async (ip) => {
    return await apiService.getUserLocation(ip);
  }
);
/** @format */
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    isFetched: false,
    currentlyFetching: false,
  },
  reducers: {
    isDataFetched: (state, action) => {
      state.isFetched = true;
    },
    isCurrentlyFetching: (state) => {
      state.currentlyFetching = true;
    },
    isFetchingEnded: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

/** @format */
import { createSlice } from "@reduxjs/toolkit";
const bagItemsSlice = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const bagItemsActions = bagItemsSlice.actions;
export default bagItemsSlice;

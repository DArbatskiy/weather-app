import { createSlice } from "@reduxjs/toolkit";

type isSearchOpenState = {
  value: boolean;
};

const initialState: isSearchOpenState = {
  value: false,
};

export const isSearchOpenSlice = createSlice({
  name: "isSearchOpen",
  initialState,
  reducers: {
    searchIsClose: (state) => {
      state.value = false;
    },
    searchIsOpen: (state) => {
      state.value = true;
    },
  },
});

export const { searchIsClose, searchIsOpen } = isSearchOpenSlice.actions;
export const isSearchOpenReducer = isSearchOpenSlice.reducer;

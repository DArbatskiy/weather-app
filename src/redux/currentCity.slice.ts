import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentCityState = {
  value: string;
  search_history: string[];
};

const initialState: currentCityState = {
  value: "moscow",
  search_history: [],
};

export const currentCitySlice = createSlice({
  name: "currentCity",
  initialState,
  reducers: {
    chooseCity: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    addCityToHistory: (state, action: PayloadAction<string>) => {
      state.search_history.push(action.payload);
      state.search_history = [...new Set(state.search_history)];
      state.search_history = state.search_history.filter(
        (city) => city.length !== 0
      );
    },
    clearHistory: (state) => {
      state.search_history = [];
    },
  },
});

export const { chooseCity, addCityToHistory, clearHistory } =
  currentCitySlice.actions;

export const currentCityReducer = currentCitySlice.reducer;

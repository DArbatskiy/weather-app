import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type currentCityState = {
  value: string,
}

const initialState: currentCityState = {
  value: 'moscow'
}

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    chooseCity: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { chooseCity } = currentCitySlice.actions

export const currentCityReducer =  currentCitySlice.reducer


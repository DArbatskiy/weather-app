import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type unitMeasureState = {
  value: 'fahrenheit' | 'celsius',
}

const initialState: unitMeasureState = {
  value: 'celsius'
}

export const unitMeasureSlice = createSlice({
  name: 'unitMeasure',
  initialState,
  reducers: {
    chooseUnitMeasure: (state, action: PayloadAction<'fahrenheit' | 'celsius'>) => {
      state.value = action.payload
    }
  }
})

export const { chooseUnitMeasure } = unitMeasureSlice.actions

export const unitMeasureReducer =  unitMeasureSlice.reducer
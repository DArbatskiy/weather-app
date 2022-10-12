import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "./weather.api";
import isSearchOpenReducer from "./isSearchOpen.slice";
import {currentCityReducer} from "./currentCity.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
    isSearchOpen: isSearchOpenReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
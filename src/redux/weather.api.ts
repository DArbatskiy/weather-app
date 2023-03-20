import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICity, IResponse } from "../interfaces";

const APIKEY = "dfa4fe62294e4248819105123232003";

export const weatherApi = createApi({
  reducerPath: "weather/api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.weatherapi.com/v1`,
  }),
  endpoints: (build) => ({
    weatherByCity: build.query<IResponse, string>({
      query: (search: string) => ({
        url: `forecast.json`,
        params: {
          key: APIKEY,
          q: search,
          days: 5,
        },
      }),
    }),
    searchByCity: build.query<ICity[], string>({
      query: (city: string) => ({
        url: `search.json`,
        params: {
          key: APIKEY,
          q: city,
        },
      }),
    }),
  }),
});

export const { useWeatherByCityQuery, useLazySearchByCityQuery } = weatherApi;

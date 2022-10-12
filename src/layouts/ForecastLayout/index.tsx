import React from "react";

import {ForecastCards} from "../../components/ForecastCards";
import {HighlightsCards} from "../../components/HighlightsCards";

import css from "./ForecastLayout.module.scss";
import {useWeatherByCityQuery} from "../../redux/weather.api";
import {useSelector} from "react-redux";
import {RootState} from "../../redux";

export const ForecastLayout = () => {
  const currentCity = useSelector((state: RootState) => state.currentCity.value)

  const {data} = useWeatherByCityQuery(currentCity)

  return (
    <div className={css.forecast}>
      {data && <ForecastCards forecast={data.forecast.forecastday}  />}
      <div className={css.highlights}>
        <h2>Today’s Hightlights </h2>
        {data && <HighlightsCards current={data.current} />}
      </div>
    </div>
  )
}
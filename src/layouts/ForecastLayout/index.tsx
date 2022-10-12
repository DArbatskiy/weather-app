import React from "react";

import {ForecastCards} from "../../components/ForecastCards";
import {HighlightsCards} from "../../components/HighlightsCards";

import {useWeatherByCityQuery} from "../../redux/weather.api";
import {useAppDispatch, useAppSelector} from "../../redux";

import css from "./ForecastLayout.module.scss";
import {chooseUnitMeasure} from "../../redux/unitMeasure.slice";

export const ForecastLayout = () => {
  const currentCity = useAppSelector(state => state.currentCity.value)
  const unitMeasure = useAppSelector(state => state.unitMeasure.value)
  const dispatch = useAppDispatch()

  const {data} = useWeatherByCityQuery(currentCity)

  return (
    <div className={css.forecast}>
      <div>
        <button disabled={unitMeasure === 'celsius'} onClick={() => dispatch(chooseUnitMeasure('celsius'))}>°C</button>
        <button disabled={unitMeasure === 'fahrenheit'} onClick={() => dispatch(chooseUnitMeasure('fahrenheit'))}>°F</button>
      </div>
      {data && <ForecastCards forecast={data.forecast.forecastday}  />}
      <div className={css.highlights}>
        <h2>Today’s Highlights </h2>
        {data && <HighlightsCards current={data.current} />}
      </div>
    </div>
  )
}
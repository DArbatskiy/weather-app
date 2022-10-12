import React from "react";

import {Forecastday} from "../../interfaces";
import {getDate} from "../../services";
import {useAppSelector} from "../../redux";

import css from "./ForecastCards.module.scss";

export type ForecastCardsProps = {
  forecast: Forecastday[]
}

export const ForecastCards = ({forecast}: ForecastCardsProps) => {
  const unitMeasure = useAppSelector(state => state.unitMeasure.value)

  const render = forecast.map(day => (
      <div className={css.forecastCard} key={day.date}>
        <div className={css.day}>{getDate(day.date)}</div>
        <img src={day.day.condition.icon} alt={day.day.condition.text} />
        <div className={css.temp}>
          <span className={css.max}>
            {unitMeasure ==='celsius' ? `${Math.round(day.day.maxtemp_c)} °C` : `${Math.round(day.day.maxtemp_f)} °F`}
          </span>
          <span className={css.min}>
            {unitMeasure ==='celsius' ? `${Math.round(day.day.mintemp_c)} °C` : `${Math.round(day.day.mintemp_f)} °F`}
          </span>
        </div>
      </div>
  ))
  return (
    <div className={css.forecastCards}>
      {render}
    </div>
  )
}
import React from "react";

import { Forecastday } from "../../interfaces";

import css from "./ForecastCards.module.scss";

export type ForecastCardsProps = {
  forecast: Forecastday[]
}

export const ForecastCards = ({forecast}: ForecastCardsProps) => {
  const render = forecast.map(day => (
      <div className={css.forecastCard} key={day.date}>
        <div className={css.day}>{day.date}</div>
        <img src={day.day.condition.icon} alt={day.day.condition.text} />
        <div className={css.temp}>
          <span className={css.max}>{day.day.maxtemp_c}℃</span><span className={css.min}>{day.day.mintemp_c}℃</span>
        </div>
      </div>
  ))
  return (
    <div className={css.forecastCards}>
      {render}
    </div>
  )
}
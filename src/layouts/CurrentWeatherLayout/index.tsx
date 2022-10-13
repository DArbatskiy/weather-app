import React from "react";
import {useDispatch} from "react-redux";

import {searchIsOpen} from "../../redux/isSearchOpen.slice";
import {IResponse} from "../../interfaces";
import locationIcon from "../../data/icons/my_location.svg";
import place from "../../data/icons/place.svg";
import {useAppSelector} from "../../redux";

import css from "./CurrentWeatherLayout.module.scss";
import {getDate} from "../../services";

export type CurrentWeatherLayoutProps = {
  data: IResponse
}

export const CurrentWeatherLayout = ({data}: CurrentWeatherLayoutProps) => {
  const unitMeasure = useAppSelector(state => state.unitMeasure.value)
  const dispatch = useDispatch()

  return (
    <div className={css.current}>
      <div className={css.navigation}>
        <button className={css.search_button} onClick={() => dispatch(searchIsOpen())}>Search for places</button>
        <button className={css.location_button}>
          <img
            className={css.locationIcon}
            src={locationIcon}
            alt={'location icon'}
          />
        </button>
      </div>
      <div className={css.currentWeather}>
        <img
          className={css.currentWeatherImage}
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        <div className={css.temperature}>
          <span
            className={css.number}>
            {unitMeasure === 'celsius' ? `
            ${Math.round(data.current.temp_c)}` : `${Math.round(data.current.temp_f)}`}
          </span>
          <span className={css.unitMeasure}>{unitMeasure === 'celsius' ? `°C` : `°F`}</span>
        </div>
        <div className={css.cloudiness}>{data.current.condition.text}</div>
        <div className={css.date}>{getDate(data.location.localtime)}</div>
        <div className={css.place}>
          <img src={place} alt={data.location.name}/>
          {data.location.name}
        </div>
      </div>
    </div>
  )
}
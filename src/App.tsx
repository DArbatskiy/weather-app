import React from 'react';

import {SearchLayout} from "./layouts/SearchLayout";
import {CurrentWeatherLayout} from "./layouts/CurrentWeatherLayout";
import {ForecastLayout} from "./layouts/ForecastLayout";

import {useAppSelector} from "./redux";
import {useWeatherByCityQuery} from "./redux/weather.api";

import css from './App.module.scss';

const App = () => {
  const isOpenSearch = useAppSelector((state) => state.isSearchOpen.value)
  const currentCity = useAppSelector((state) => state.currentCity.value)

  const {data} = useWeatherByCityQuery(currentCity)

  if (!data) return null;

  return (
      <div className={css.container}>
        {isOpenSearch ? <SearchLayout /> : <CurrentWeatherLayout data={data} />}
        <ForecastLayout />
      </div>
  );
}

export default App;

import React, {useState} from "react";

import {searchIsClose} from "../../redux/isSearchOpen.slice";
import {useLazySearchByCityQuery} from "../../redux/weather.api";
import {addCityToHistory, chooseCity, clearHistory} from "../../redux/currentCity.slice";
import {useAppDispatch, useAppSelector} from "../../redux";
import {ICity} from "../../interfaces";

import css from "./SearchLayout.module.scss";

export const SearchLayout = () => {
  const [search, setSearch] = useState('')
  const cityHistory = useAppSelector(state => state.currentCity.search_history)
  const dispatch = useAppDispatch()
  const [fetchCities, {isLoading: citiesLoading, data: cities}] = useLazySearchByCityQuery()

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    if (search.length > 2) {
      fetchCities(search)
    }
  }

  const handleButtonClick = (input: string) => {
    setSearch(input)
    fetchCities(input)
    dispatch(chooseCity(input))
    dispatch(searchIsClose())
    setSearch('')
    dispatch(addCityToHistory(input))
  }

  return (
    <div className={css.search}>
      <div className={css.closeButtonWrapper}>
        <button className={css.closeButton} onClick={() => dispatch(searchIsClose())}></button>
      </div>
      <div className={css.searchForm}>
        <input
          className={css.searchInput}
          placeholder='search location'
          value={search}
          onChange={e => handleInputChange(e)}
        />
      </div>
        <ul className={css.citiesList}>
          {citiesLoading && <p>Loading...</p>}
          {cities && cities.map((city: ICity) => (
            <li className={css.cityItem} key={city.id}>
              <button
                className={css.cityButton}
                onClick={() => handleButtonClick(city.name)}
              >{city.name}</button>
            </li>
          ))}
          {!cities && cityHistory.length > 0 &&
            <>
              <div className={css.clearButtonWrapper}>
                <button
                  className={css.clearButton}
                  onClick={() => dispatch(clearHistory())}
                >Clear</button>
              </div>
              {cityHistory.map((city) => (
                <li className={css.cityItem} key={city}>
                  <button
                    className={css.cityButton}
                    onClick={() => handleButtonClick(city)}
                  >{city}</button>
                </li>
              ))}
            </>
          }
        </ul>
    </div>
  )
}
import React, {useState} from "react";

import {searchIsClose} from "../../redux/isSearchOpen.slice";
import {useLazySearchByCityQuery} from "../../redux/weather.api";
import {chooseCity} from "../../redux/currentCity.slice";
import {useAppDispatch} from "../../redux";
import {ICity} from "../../interfaces";

import css from "./SearchLayout.module.scss";

export const SearchLayout = () => {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const [fetchCities, {isLoading: citiesLoading, data: cities}] = useLazySearchByCityQuery()

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    fetchCities(search)
  }

  const handleButtonClick = () => {
    fetchCities(search)
    dispatch(chooseCity(search))
    dispatch(searchIsClose())
    setSearch('')
  }

  return (
    <div className={css.search}>
      <div className={css.closeButtonWrapper}>
        <button className={css.closeButton}  onClick={() => dispatch(searchIsClose())}>X</button>
      </div>
      <div className={css.searchForm}>
        <input
          className={css.searchInput}
          placeholder='search location'
          value={search}
          onChange={e => handleInputChange(e)}
        />
        <button
          className={css.searchSubmit}
          onClick={handleButtonClick}
        >Search</button>
      </div>
      <div>
        <ul>
          {citiesLoading && <p>Loading...</p>}
          {cities && cities.map((city: ICity) => (
            <li className={css.city}>
              <button
                className={css.cityButton}
                onClick={handleButtonClick}
              >{city.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
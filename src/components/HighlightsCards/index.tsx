import React from "react";

import {Current} from "../../interfaces";

import css from "./HighlightsCards.module.scss";

export type HighlightsCardsProps = {
  current: Current
}

export const HighlightsCards = ({current}: HighlightsCardsProps) => {

  return (
    <div className={css.highlightsCards}>
      <div className={css.highlightsCard}>
        <div className={css.heading}>Wind status</div>
        <div className={css.number}>{current.wind_mph}<span className={css.designation}>mph</span></div>
        <div>WSW</div>
      </div>
      <div className={css.highlightsCard}>
        <div className={css.heading}>Humidity</div>
        <div className={css.number}>{current.humidity}<span className={css.designation}>%</span></div>
        <meter className={css.meter} min="0" max="100" value={current.humidity}></meter>
      </div>
      <div className={css.highlightsCard}>
        <div className={css.heading}>Visibility</div>
        <div className={css.number}>{current.vis_miles}<span className={css.designation}>miles</span></div>
      </div>
      <div className={css.highlightsCard}>
        <div className={css.heading}>Air Pressure</div>
        <div className={css.number}>{current.pressure_mb}<span className={css.designation}>mb</span></div>
      </div>
    </div>
  )
}
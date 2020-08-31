import React from "react"
import Checkbox from "../Checkbox"
import { getTypeMarker } from "../../services/api/marker"

function getTypeDivs(category, onTypeToggle) {
  const typeDivs = []
  category.types.forEach((t) =>
    typeDivs.push(
      <div key={t.name} className="ml-3 row p-1 map-legend__row">
        <Checkbox
          name="check"
          checked={t.enabled}
          onChange={() => onTypeToggle(category, t)}
        />
        <span className="map-legend__icon">
          <img
            className="map-legend__icon"
            src={getTypeMarker(category.name, t.name).iconUrl}
            alt=""
          />
        </span>
        <span className="map-legend__row-title">{t.name}</span>
      </div>
    )
  )
  return typeDivs
}
export default getTypeDivs

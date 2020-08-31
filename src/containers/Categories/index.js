import React from "react"
import getTypeDivs from "../Types"
import Checkbox from "../Checkbox"
import { getMarker } from "../../services/api/marker"

function getCategoryDivs(category, id, onCategoryToggle, onTypeToggle) {
  return (
    <div key={category.name} className="col category_row">
      <div className="row" style={{ cursor: "pointer" }}>
        <Checkbox
          name="check"
          checked={category.enabled}
          onChange={() => onCategoryToggle(id)}
        />
        <div
          style={{ outline: "none" }}
          tabIndex={0}
          role="menuitem"
          onClick={() => this.props.onVisibleToggle(id)}
          onKeyDown={() => this.props.onVisibleToggle(id)}
        >
          <span className="map-legend__icon">
            <img
              className="map-legend__icon"
              src={getMarker(category.name).iconUrl}
              alt=""
            />
          </span>
          <span className="map-legend__row-title">{category.name}</span>
        </div>
      </div>
      {category.visible ? getTypeDivs(category, onTypeToggle) : null}
    </div>
  )
}
export default getCategoryDivs

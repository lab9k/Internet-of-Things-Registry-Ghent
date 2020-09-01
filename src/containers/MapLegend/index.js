import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

import { ReactComponent as CollapseIcon } from '../../icons/icon-arrow-down.svg'
import { ReactComponent as ExpandIcon } from '../../icons/icon-arrow-up.svg'
import { ReactComponent as MapLayersIcon } from '../../icons/icon-map-layers.svg'

import './style.scss'
import getCategoryDivs from '../Categories'
import Device from '../../services/classes/Device'

function MapLegend(props) {
  const [isLegendVisible, setVisible] = useState(window.innerWidth > 576)
  const [t] = useTranslation()

  const checkboxList = Object.entries(
    props.categories
  ).map(([id, category]) => getCategoryDivs(
    category,
    id,
    props.onCategoryToggle,
    props.onTypeToggle
  ))
  return (
    <section
      id="map-legend"
      className={`
          map-legend
          map-legend--${isLegendVisible ? 'expanded' : 'collapsed'}
        `}
    >
      <button
        type="button"
        className="map-legend__header"
        onClick={() => setVisible(!isLegendVisible)}
      >
        <MapLayersIcon className="map-legend__header-icon" />
        <h4 className="map-legend__header-title" aria-hidden="true">
          {t('mapLegend.devices')}
        </h4>
        <CollapseIcon className="map-legend__header-icon map-legend__header-icon--expanded" />
        <ExpandIcon className="map-legend__header-icon map-legend__header-icon--collapsed" />
      </button>
      <div className="map-legend__body">{checkboxList}</div>
    </section>
  )
}

MapLegend.propTypes = {
  categories: PropTypes.arrayOf(Device).isRequired,
  onCategoryToggle: PropTypes.func.isRequired,
  onTypeToggle: PropTypes.func.isRequired
}

export default MapLegend

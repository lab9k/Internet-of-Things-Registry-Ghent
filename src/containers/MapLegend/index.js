import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as CollapseIcon } from '../../icons/icon-arrow-down.svg'
import { ReactComponent as ExpandIcon } from '../../icons/icon-arrow-up.svg'
import { ReactComponent as MapLayersIcon } from '../../icons/icon-map-layers.svg'

import { messages } from './messages'
import './style.scss'
import getCategoryDivs from '../Categories'
import Device from '../../services/classes/Device'

function formatMessage(title) {
  return title.defaultMessage
}

class MapLegend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLegendVisible: window.innerWidth > 576
    }
  }

  render() {
    const checkboxList = Object.entries(
      this.props.categories
    ).map(([id, category]) => getCategoryDivs(
      category,
      id,
      this.props.onCategoryToggle,
      this.props.onTypeToggle
    ))
    const { isLegendVisible } = this.state
    const ariaLabel = `${formatMessage(messages.title)}, ${
      isLegendVisible
        ? formatMessage(messages.hide)
        : formatMessage(messages.show)
    }`
    return (
      <section
        id="map-legend"
        aria-label={ariaLabel}
        className={`
          map-legend
          map-legend--${isLegendVisible ? 'expanded' : 'collapsed'}
        `}
      >
        <button
          type="button"
          className="map-legend__header"
          onClick={() => this.setState({ isLegendVisible: !isLegendVisible })}
          title={
            isLegendVisible
              ? formatMessage(messages.hide)
              : formatMessage(messages.show)
          }
        >
          <MapLayersIcon className="map-legend__header-icon" />
          <h4 className="map-legend__header-title" aria-hidden="true">
            {formatMessage(messages.devices)}
          </h4>
          <CollapseIcon className="map-legend__header-icon map-legend__header-icon--expanded" />
          <ExpandIcon className="map-legend__header-icon map-legend__header-icon--collapsed" />
        </button>
        <div className="map-legend__body">{checkboxList}</div>
      </section>
    )
  }
}

MapLegend.propTypes = {
  categories: PropTypes.arrayOf(Device).isRequired,
  onCategoryToggle: PropTypes.func.isRequired,
  onTypeToggle: PropTypes.func.isRequired
}

export default MapLegend

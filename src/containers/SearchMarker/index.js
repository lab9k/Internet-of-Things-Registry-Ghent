import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import PropTypes from 'prop-types'
import { getMarker } from '../../services/api/marker'

const createIcon = () => {
  const marker = getMarker('marker')
  marker.iconSize = [20, 20]
  return new L.Icon({
    ...marker
  })
}

const SMarker = (props) => {
  const deviceIcon = createIcon()
  const location = {
    lat: props.location[0],
    lng: props.location[1]
  }
  return (
    <Marker position={location} icon={deviceIcon}>
      <Popup>
        <p>search result</p>
      </Popup>
    </Marker>
  )
}

SMarker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.array.isRequired
}

export default SMarker

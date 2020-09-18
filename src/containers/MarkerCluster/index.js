import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import './style.scss'
import { useLeaflet } from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import { createIcon } from '../LeafletMarker'
// if you want to customize cluster behavior
// https://github.com/Leaflet/Leaflet.markercluster#options
const mcg = L.markerClusterGroup({
  disableClusteringAtZoom: 16,
  spiderfyOnMaxZoom: false
})

const MarkerCluster = ({ markers }) => {
  const { map } = useLeaflet()
  useEffect(() => {
    mcg.clearLayers()
    markers.forEach((LMarkerObject) => {
      L.marker(
        new L.LatLng(
          LMarkerObject.props.device.latitude,
          LMarkerObject.props.device.longitude
        ),
        {
          icon: createIcon(
            LMarkerObject.props.device.category,
            LMarkerObject.props.device.type
          )
        }
      )
        .addTo(mcg)
        .bindPopup(renderToStaticMarkup(LMarkerObject))
    })
    map.addLayer(mcg)
  }, [markers, map])

  return null
}

export default MarkerCluster

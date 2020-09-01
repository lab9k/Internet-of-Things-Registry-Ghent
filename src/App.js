import React from 'react'
import './App.scss'
import './global.scss'
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LeafletMap from './containers/LeafletMap/index'

export default function App() {
  return (
    <div className="container">
      <LeafletMap />
    </div>
  )
}

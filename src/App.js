import React from 'react'
import './App.scss'
import './global.scss'
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LeafletMap from './containers/LeafletMap/index'
import AboutPage from './containers/AboutPage';
import LoadingSpinnerComponent from './containers/LeafletMap/loadingSpinner'

export default function App() {
  return (
    <Router>
      <Route path="/about" component={AboutPage} />
      <Route exact path="/">
        <LeafletMap />
        <LoadingSpinnerComponent />
      </Route>
    </Router>
  )
}

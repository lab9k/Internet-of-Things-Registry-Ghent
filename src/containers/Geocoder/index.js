import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { getLocations, getAddress } from '../../services/api/Geocoder';
import Suggestions from '../Suggestions';

function Geocoder(props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const searchEl = useRef(null)
  const getData = (v) => {
    getLocations(`${v},${process.env.REACT_APP_CITY_FILTER}`)
      .then((data) => {
        setResults(data.SuggestionResult);
      });
  }

  useEffect(() => {
    if (query !== '') {
      getData(query)
    }
  }, [query])

  const handleInputChange = () => {
    setQuery(searchEl.current.value);
  }

  const clearData = (q) => {
    getAddress(q)
      .then((c) => props.viewportCallback(
        [c.LocationResult[0].Location.Lat_WGS84,
          c.LocationResult[0].Location.Lon_WGS84]
      ));
    setQuery('')
    setResults([])
  }

  return (
    <form className="geocoder" autoComplete="off">
      <input
        className="form-control"
        placeholder="Gent"
        value={query}
        ref={searchEl}
        onChange={handleInputChange}
      />
      <Suggestions results={results} clearResults={clearData} />
    </form>
  );
}

Geocoder.propTypes = {
  viewportCallback: PropTypes.func.isRequired
}

export default Geocoder;

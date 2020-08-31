import React from 'react'
import PropTypes from 'prop-types'

const Suggestions = (props) => {
  const options = props.results.map((value) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li
      role="menuitem"
      onClick={() => props.clearResults(value)}
      className="list-group-item list-group-item-action"
      key={value}
    >
      {value}
    </li>
  ))
  return <ul className="list-group">{options}</ul>
}

Suggestions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
  clearResults: PropTypes.func.isRequired
}
export default Suggestions

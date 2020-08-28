import React from "react"
import PropTypes from "prop-types"

const Suggestions = (props) => {
  const options = props.results.map((value) => (
    <li
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
  results: PropTypes.array,
  clearResults: PropTypes.func,
}
export default Suggestions

import React from 'react';
import PropTypes from 'prop-types';

export default function TextBlock(props) {
  const { content, label } = props
  if (content === null || label === null || content === undefined) {
    return null
  }
  return (
    <div className="data-processing border-bottom pb-2 pl-1 pr-1 pt-2 mt-1 rounded">
      <h6 className="text-muted card-subtitle mb-1">{label}</h6>
      <p className="card-text mt-auto">
        {content}
      </p>
    </div>
  )
}

TextBlock.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

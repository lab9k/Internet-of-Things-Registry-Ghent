import React from 'react';
import PropTypes from 'prop-types';

export default function LinkBlock(props) {
  const { deviceLink, deviceLinkLabel, alternativeLinkLabel } = props
  if (deviceLink === null || deviceLink === undefined) {
    return null
  }
  if (deviceLinkLabel === undefined) {
    return (
      <a className="card-link mt-2" href={deviceLink}>
        {alternativeLinkLabel}
      </a>
    )
  }
  return (
    <a className="card-link mt-2" href={deviceLink}>
      {deviceLinkLabel}
    </a>
  )
}

LinkBlock.propTypes = {
  deviceLink: PropTypes.string.isRequired,
  deviceLinkLabel: PropTypes.string.isRequired,
  alternativeLinkLabel: PropTypes.string.isRequired
}

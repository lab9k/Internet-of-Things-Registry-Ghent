import React from 'react';
import PropTypes from 'prop-types';

export default function LinkBlock(props) {
  const { deviceLink, deviceLinkLabel, alternativeLinkLabel } = props
  if (deviceLink === null || deviceLink === undefined) {
    return null
  }
  if (deviceLinkLabel === undefined) {
    return (
      <div className="card-link pb-1 pl-1 pr-1 pt-2">
        <a className="" href={deviceLink}>
          {alternativeLinkLabel}
        </a>
      </div>
    )
  }
  return (
    <div className="card-link pb-1 pl-1 pr-1 pt-2">
      <a className="" href={deviceLink}>
        {deviceLinkLabel}
      </a>
    </div>
  )
}

LinkBlock.propTypes = {
  deviceLink: PropTypes.string.isRequired,
  deviceLinkLabel: PropTypes.string.isRequired,
  alternativeLinkLabel: PropTypes.string.isRequired
}

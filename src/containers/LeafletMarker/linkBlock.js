import React from 'react';
import PropTypes from 'prop-types';
import Device from '../../services/classes/Device';

export default function LinkBlock(props) {
  const { device, linkLabel } = props
  if (device.linklabel === undefined) {
    return (
      <a className="card-link mt-2" href={device.link}>
        {linkLabel}
      </a>
    )
  }
  return (
    <a className="card-link mt-2" href={device.link}>
      {device.linklabel}
    </a>
  )
}

LinkBlock.propTypes = {
  device: PropTypes.instanceOf(Device).isRequired,
  linkLabel: PropTypes.string.isRequired
}

import React from "react"
import L from "leaflet"
import PropTypes from "prop-types"
import "./style.scss"

import { renderToString } from "react-dom/server"
import { Card } from "reactstrap"
import messages from "./messages"
import { getTypeMarker } from "../../services/api/marker"
import Device from "../../services/classes/Device"

export const createIcon = (category, type) =>
  new L.Icon({
    ...getTypeMarker(category, type),
  })

function formatMessage(s) {
  return s.defaultMessage
}
// LMarker has to return pure HTML not JSX to work nicely with markers
export function LMarker(device) {
  const dataProcessingLabel = formatMessage(messages.data_processing)
  const dataOwnerLabel = formatMessage(messages.data_owner)
  const retentionLabel = formatMessage(messages.retention)
  const linkLabel = formatMessage(messages.link_text)
  const body = (
    <Card>
      <div className="card-body">
        <div className="card-title border-bottom mb-1">
          <h5>
            <b>{device.title}</b>
          </h5>
        </div>
        <div className="col px-0">
          <div className="row pb-0 border-bottom">
            <div className="col">
              <h5>
                <i>{device.category}</i>
              </h5>
            </div>
            <div className="col">
              <h5>
                <i>{device.type}</i>
              </h5>
            </div>
          </div>
          <div className="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 rounded">
            <h6 className="text-muted card-subtitle mb-2">
              {dataProcessingLabel}
            </h6>
            <p className="card-text mt-auto">{device.dataprocessing}</p>
          </div>
          <div className="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 rounded">
            <h6 className="text-muted card-subtitle mb-2">{dataOwnerLabel}</h6>
            <p className="card-text mt-auto" style={{ fontSize: "14px" }}>
              {device.dataowner}
            </p>
          </div>
          <div className="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 mb-1 rounded">
            <h6 className="text-muted card-subtitle mb-2">{retentionLabel}</h6>
            <p className="card-text mt-auto" style={{ fontSize: "14px" }}>
              {device.retention}
            </p>
          </div>
          <a className="card-link mt-2" href={device.link}>
            {linkLabel}
          </a>
        </div>
      </div>
    </Card>
  )
  return renderToString(body)
}

LMarker.propTypes = {
  device: PropTypes.instanceOf(Device).isRequired,
}

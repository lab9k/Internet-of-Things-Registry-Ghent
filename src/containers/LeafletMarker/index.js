import L from "leaflet"
import PropTypes from "prop-types"
import "./style.scss"
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
  return `<div class="card">
      <div class="card-body">
        <div class="card-title border-bottom mb-1">
          <h3>
            <b>${device.title}</b>
          </h3>
        </div>
        <div class="col px-0">
          <div class="row pb-0 border-bottom">
            <div class="col">
              <h3>
                <i>${device.category}</i>
              </h3>
            </div>
            <div class="col">
              <h3>
                <i>${device.type}</i>
              </h3>
            </div>
          </div>
          <div class="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 rounded">
            <h6 class="text-muted card-subtitle mb-2">
              ${dataProcessingLabel}
            </h6>
            <p class="card-text mt-auto">${device.dataprocessing}</p>
          </div>
          <div class="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 rounded">
            <h6 class="text-muted card-subtitle mb-2">${dataOwnerLabel}</h6>
            <p class="card-text mt-auto" style="font-size: 14px">
              ${device.dataowner}
            </p>
          </div>
          <div class="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 mb-1 rounded">
            <h6 class="text-muted card-subtitle mb-2">${retentionLabel}</h6>
            <p class="card-text mt-auto" style="font-size: 14px">
              ${device.retention}
            </p>
          </div>
          <a class="card-link mt-2" href=${device.link}>
            ${linkLabel}
          </a>
        </div>
      </div>
    </div>`
}

LMarker.propTypes = {
  device: PropTypes.instanceOf(Device).isRequired,
}

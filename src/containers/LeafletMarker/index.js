import React from 'react'
import L from 'leaflet'
import './style.scss'
import { Card } from 'reactstrap'
import { getTypeMarker } from '../../services/api/marker'
import Device from '../../services/classes/Device';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

export const createIcon = (category, type) => new L.Icon({
  ...getTypeMarker(category, type)
})

class LMarker extends React.Component {
  render() {
    console.log(this.props)
    const {device, t } = this.props
    const dataProcessingLabel = t('leafletMarker.dataprocessing')
    const personalDataLabel = t('leafletMarker.personaldata')
    const retentionLabel = t('leafletMarker.retentionPeriod')
    const linkLabel = t('leafletMarker.linkLabel')
    return (
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
              <h6 className="text-muted card-subtitle mb-2">{personalDataLabel}</h6>
              <p className="card-text mt-auto" style={{ fontSize: '14px' }}>
                {device.dataowner}
              </p>
            </div>
            <div className="data-processing border-bottom pb-1 pl-1 pr-1 pt-2 mt-1 mb-1 rounded">
              <h6 className="text-muted card-subtitle mb-2">{retentionLabel}</h6>
              <p className="card-text mt-auto" style={{ fontSize: '14px' }}>
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
  }
}
LMarker.propTypes = {
  t: PropTypes.func.isRequired,
  device: PropTypes.instanceOf(Device).isRequired
}

export default withTranslation()(LMarker)

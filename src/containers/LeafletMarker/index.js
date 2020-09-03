import React from 'react'
import L from 'leaflet'
import './style.scss'
import { Card } from 'reactstrap'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getTypeMarker } from '../../services/api/marker'
import Device from '../../services/classes/Device';
import TextBlock from './textBlock';
import LinkBlock from './linkBlock';

export const createIcon = (category, type) => new L.Icon({
  ...getTypeMarker(category, type)
})

function LMarker(props) {
  const { t } = useTranslation()
  const { device } = props
  const dataProcessingLabel = t('dataprocessing')
  const personalDataLabel = t('personaldata')
  const retentionLabel = t('retention')
  const contactLabel = t('datacontactorg')
  const linkLabel = t('linklabel')
  const datalinkLabel = t('datalinklabel')
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
          <TextBlock label={dataProcessingLabel} content={device.dataprocessing} />
          <TextBlock label={personalDataLabel} content={device.personalData} />
          <TextBlock label={retentionLabel} content={device.retention} />
          <TextBlock label={contactLabel} content={device.contactorg} />
          <LinkBlock
            deviceLink={device.link}
            deviceLinkLabel={device.linklabel}
            alternativeLinkLabel={linkLabel}
          />
          <LinkBlock
            deviceLink={device.datalink}
            deviceLinkLabel={device.datalinklabel}
            alternativeLinkLabel={datalinkLabel}
          />
        </div>
      </div>
    </Card>
  )
}
LMarker.propTypes = {
  device: PropTypes.instanceOf(Device).isRequired
}

export default LMarker

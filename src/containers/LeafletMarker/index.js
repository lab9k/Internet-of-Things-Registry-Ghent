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
import tooltips from './tooltips.json';

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
        <div className="card-title border-bottom pl-1 pr-1 mb-0">
          <h5>
            {device.title}
          </h5>
        </div>
        <div className="col px-0">
          <div className="card-category-type text-muted border-bottom pb-2 pl-1 pr-1 pt-2">
            {device.category}
            {' '}
            <span>
              &rsaquo;
              {device.type}
            </span>
          </div>
          <TextBlock
            label={dataProcessingLabel}
            content={device.dataprocessing}
            tooltip={tooltips.dataprocessing}
          />
          <TextBlock
            label={personalDataLabel}
            content={device.personalData}
            tooltip={tooltips.personaldata}
          />
          <TextBlock
            label={retentionLabel}
            content={device.retention}
            tooltip={tooltips.retention}
          />
          <TextBlock
            label={contactLabel}
            content={device.contactorg}
            tooltip={tooltips.contactorg}
          />
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

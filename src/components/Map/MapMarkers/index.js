import React from 'react'
import 'html-hint/dist/html-hint.css'
import _ from 'lodash'
const classNames = require('classnames')

import './styles.scss'
export default class MapMarkers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this

    return (
      <div className={classNames(
        'hint hint--html hint--info hint--top',
        'map-marker',
        {
          'free': props.isStationFree,
          'busy' : props.isStationBusy,
          'disconnected': props.isStationDisconnected
        })}
      >
        {this.props.isStationFree && (<span>F</span>)}
        {this.props.isStationBusy && (<span>B</span>)}
        {this.props.isStationDisconnected && (<span>O</span>)}
        <div style={{width: 220}} className="hint__content">
          {
            props.hoverOverStationInformationState === 'PROGRESS'
              ? <span>Loading ...</span>
              : <div>
                <p>Name: {props.hoverOverStationInformation.name}</p>
                <p>Address: {props.hoverOverStationInformation.address}</p>
                <p>Opening hours: {props.hoverOverStationInformation.openHours ? props.hoverOverStationInformation.openHours : 'Unknown'}</p>
                {
                  _.map(props.hoverOverStationInformation.evses, (evse) => {
                    return evse.pricing.map(option => {
                      return (
                        <div  key={option.name}>
                          <p>Pricing option: {option.name} {option.priceCents} {option.currency}</p>
                        </div>
                      )
                    })
                  })
                }
              </div>
          }
        </div>
      </div>
    )
  }
}

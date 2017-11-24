import React from 'react'
import 'html-hint/dist/html-hint.css'
import _ from 'lodash'

const K_WIDTH = 18
const K_HEIGHT = 18

const stationFreeStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  border: '2px solid green',
  borderRadius: '50%',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 10,
  color: '#3f51b5',
}

const stationOccupiedStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  borderRadius: '50%',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 10,
  border: '2px solid red',
  color: '#f44336'
}

const hoverStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  borderRadius: '50%',
  backgroundColor: 'white',
  textAlign: 'center',
  fontSize: 10,
  color: 'blue',
  border: '2px solid blue'
}

export default class MapMarkers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this
    const style = this.props.isStationFree ? stationFreeStyle : stationOccupiedStyle

    return (
      <div className="hint hint--html hint--info hint--top" style={this.props.hover ? hoverStyle : style}>
        <span>{this.props.text}</span>
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

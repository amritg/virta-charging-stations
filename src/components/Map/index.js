import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarkers from './MapMarkers'

const K_SIZE = 40

export default class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  _onChildMouseEnter(key /*, childProps */){
    console.log(key)
    this.props.onHoverKeyChange(Number(key))
    this.props.fetchStationInformation(key)
  }

  _onChildMouseLeave(/*key , childProps*/) {
    this.props.onHoverKeyChange(undefined)
  }

  render() {
    const { props } = this
    const mapMarkers = props.stations
      .map((station) => {
        const isStationFree = station.evses.filter(evse => evse.status === 1).length > 0 ? true : false
        return (
          <MapMarkers 
            key={station.id}
            stationId={station.id}
            lat={station.lat}
            lng={station.lon} 
            text={isStationFree ? 'Y' : 'N'}
            isStationFree={isStationFree}
            hover={props.hoverKey === station.id}
            hoverOverStationInformation={props.hoverOverStationInformation}
            hoverOverStationInformationState={props.hoverOverStationInformationState}
          />
        )
      }

      )
    return (
      <GoogleMapReact
        defaultCenter={this.props.defaultCenter}
        defaultZoom={this.props.defaultZoom}
        hoverDistance={K_SIZE / 2}
        onChildMouseEnter={this._onChildMouseEnter.bind(this)}
        onChildMouseLeave={this._onChildMouseLeave.bind(this)}
      >
        {mapMarkers}
      </GoogleMapReact>
    )
  }
}

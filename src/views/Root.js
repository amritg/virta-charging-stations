import React from 'react'
import { connect } from 'react-redux'
import {
  fetchStationInformation,
  fetchALLStationsStatusInBoundary,
  hoverKeyChange
} from '../actions'

import Map from '../components/Map'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {lat: 60.24, lng: 24.92},
      zoom: 11
    }
  }
  
  componentDidMount() {
    this.props.fetchALLStationsStatusInBoundary()
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%', position: 'absolute', top:0, left: 0}}>
        {
          this.props.stationsState === 'PROGRESS'
            ? <div style={{width: '100%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px'}}><p>Loading ... :)</p></div>
            :  <Map
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
              stations={this.props.stations}
              hoverKey={this.props.hoverKey}
              onHoverKeyChange={this.props.hoverKeyChange}
              fetchStationInformation={this.props.fetchStationInformation}
              hoverOverStationInformation={this.props.hoverOverStationInformation}
              hoverOverStationInformationState={this.props.hoverOverStationInformationState}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.mapReducer.stations,
    stationsState: state.mapReducer.stationsState,
    hoverOverStationInformation: state.mapReducer.hoverOverStationInformation,
    hoverOverStationInformationState: state.mapReducer.hoverOverStationInformationState,
    hoverKey: state.mapReducer.hoverKey
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchStationInformation: (stationId) => dispatch(fetchStationInformation(stationId)),
    fetchALLStationsStatusInBoundary: () => dispatch(fetchALLStationsStatusInBoundary()),
    hoverKeyChange: (id) => dispatch(hoverKeyChange(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

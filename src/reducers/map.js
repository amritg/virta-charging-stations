import {
  GET_STATION_INFORMATION_REQUEST,
  GET_STATION_INFORMATION_SUCCESS,
  GET_ALL_STATIONS_STATUS_IN_BOUNDARY_REQUEST,
  GET_ALL_STATIONS_STATUS_IN_BOUNDARY_SUCCESS,
  GET_ALL_STATIONS_STATUS_IN_BOUNDARY_FAILURE,
  HOVER_KEY_CHANGE
} from '../actionTypes'

const STANDBY = 'STANDBY'
const PROGRESS = 'PROGRESS'
const COMPLETE_SUCCESS = 'COMPLETE_SUCCESS'
const COMPLETE_FAILURE = 'COMPLETE_FAILURE'

const initialState = {
  stationsState: STANDBY,
  hoverOverStationInformationState: STANDBY,
  stations: [],
  hoverOverStationInformation: {},
  hoverKey: undefined
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_STATION_INFORMATION_REQUEST:
    return Object.assign({}, state, { hoverOverStationInformationState: PROGRESS })
  case GET_STATION_INFORMATION_SUCCESS:
    return Object.assign({}, state, {hoverOverStationInformationState: COMPLETE_SUCCESS, hoverOverStationInformation: action.result.station})
  case GET_ALL_STATIONS_STATUS_IN_BOUNDARY_REQUEST:
    return Object.assign({}, state, {stationsState: PROGRESS})
  case GET_ALL_STATIONS_STATUS_IN_BOUNDARY_SUCCESS:
    return Object.assign({}, state, { stations: action.result.stations, stationsState: COMPLETE_SUCCESS })
  case GET_ALL_STATIONS_STATUS_IN_BOUNDARY_FAILURE:
    return Object.assign({}, state, { stations: action.result.message, stationsState: COMPLETE_FAILURE })
  case HOVER_KEY_CHANGE:
    return Object.assign({}, state, {hoverKey: action.payload.id})
  default:
    return state
  }
}

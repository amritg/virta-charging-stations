import * as ActionTypes from '../actionTypes'

const baseUrl = 'https://api.virta.fi/v4/stations'

/**
 * Action Creators
 */
export const  hoverKeyChange= (id) => {
  return {
    type: ActionTypes.HOVER_KEY_CHANGE,
    payload: {
      id: id
    }
  }
}

export const  getALLStationsStatusInBoundaryRequest= () => {
  return {
    type: ActionTypes.GET_ALL_STATIONS_STATUS_IN_BOUNDARY_REQUEST
  }
}

export const  getALLStationsStatusInBoundarySuccess= (stations) => {
  return {
    type: ActionTypes.GET_ALL_STATIONS_STATUS_IN_BOUNDARY_SUCCESS,
    result: {
      stations: stations
    }
  }
}

export const  getALLStationsStatusInBoundaryFailure= () => {
  return {
    type: ActionTypes.GET_ALL_STATIONS_STATUS_IN_BOUNDARY_FAILURE
  }
}

export const  getStationInformationRequest= () => {
  return {
    type: ActionTypes.GET_STATION_INFORMATION_REQUEST,
  }
}

export const  getStationInformationSuccess = (station) => {
  return {
    type: ActionTypes.GET_STATION_INFORMATION_SUCCESS,
    result: {
      station: station
    }
  }
}

export const  getStationInformationFailure= () => {
  return {
    type: ActionTypes.GET_STATION_INFORMATION_FAILURE
  }
}

/**
 * Async API Calls
 */

export const fetchALLStationsStatusInBoundary = () => {
  return (dispatch) => {
    dispatch(getALLStationsStatusInBoundaryRequest())
    return fetch(`${baseUrl}/status/?latMin=60&latMax=62&longMin=20&longMax=30`)
      .then(response=> response.json())
      .then(response => dispatch(getALLStationsStatusInBoundarySuccess(response)))
  }
}

export const fetchStationInformation = (stationId) => {
  return (dispatch) => {
    dispatch(getStationInformationRequest())
    return fetch(`${baseUrl}/${stationId}`)
      .then(response=> response.json())
      .then(response => setTimeout(() => dispatch(getStationInformationSuccess(response)), 300))
  }
}

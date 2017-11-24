import { combineReducers } from 'redux'
import { mapReducer } from './map'

export const RootReducer = combineReducers({
  mapReducer: mapReducer,
})

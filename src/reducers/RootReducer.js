import { combineReducers } from 'redux'
import { reducer } from './reducer'

export const RootReducer = combineReducers({
  reducer: reducer,
})

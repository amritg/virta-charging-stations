import {
  REQUEST_NOW_PLAYING
} from '../actions/actions'

const initialState = {
  nowPlayingMovies: []
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_NOW_PLAYING:
    return Object.assign({})
  default:
    return state
  }
}

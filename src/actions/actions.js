import * as ActionTypes from '../actionTypes'

/**
 * Action Creators
 */

export const requestNowPlaying = () => {
  return {
    type: ActionTypes.REQUEST_NOW_PLAYING
  }
}

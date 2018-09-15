import * as types from '../../../store/actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.CHANGE_LOGIN:
      return state.set('login', true)
    case types.LOGOUT:
      return state.set('login', false)
    default:
      return state
  }
}
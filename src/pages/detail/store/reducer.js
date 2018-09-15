import {fromJS} from 'immutable'
import * as types from '../../../store/actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.GET_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
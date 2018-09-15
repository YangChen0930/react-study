import * as types from '../../../store/actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.GET_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      });
    case types.GET_MORE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPgae
      });
    case types.TOGGLE_SCROLL:
      return state.set('showScroll', action.show);
    default:
      return state
  }
}
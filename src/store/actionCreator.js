import * as types from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'

export const setSearchInputFocus = () => ({
  type: types.SEARCH_FOCUS
})

export const setSearchInputBlur = () => ({
  type: types.SEARCH_BLUR
})

const changeList = (data) => ({
  type: types.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      dispatch(changeList(res.data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: types.CHANGE_PAGE,
  page
})

const getHomeInfo = (data) => ({
  type: types.GET_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const addHomeList = (list, nextPgae) => ({
  type: types.GET_MORE_LIST,
  list: fromJS(list),
  nextPgae
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch(getHomeInfo(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: types.TOGGLE_SCROLL,
  show
})

const changeDetail = (title, content) => ({
  type: types.GET_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    })
  }
}

const changeLogin = () => ({
  type: types.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        alert("登录失败")
      }
    })
  }
}

export const logout = () => ({
  type: types.LOGOUT,
  value: false
})
import React, {PureComponent}  from 'react'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import * as actions from '../../store/actionCreator'
import {BackTop} from './style'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
}  from './style'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4457/496b91e42ad17897c0c0ded08385c95911870459.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ''
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  getHomeData() {
   dispatch(actions.getHomeData())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actions.toggleTopShow(true))
    } else {
      dispatch(actions.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
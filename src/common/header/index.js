import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Headers,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button
} from './style.js'
import * as actions from '../../store/actionCreator'

class Header extends Component {
  getListArea() {
    const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page-1) * 10; i< page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={ () => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {focused, list, login, handleInputBlur, handleInputFocus, logout} = this.props
    return (
      <Headers>
        <HeaderWrapper>
          <Link to="/">
            <Logo></Logo>
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              login ?
                <NavItem onClick={logout} className="right">退出</NavItem> :
                <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }
            <NavItem className="right">
              <i className="iconfont" style={{fontSize: '24px'}}>&#xe607;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused': ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe676;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">
                <i className="iconfont">&#xe602;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </Headers>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actions.getList())
      dispatch(actions.setSearchInputFocus())
    },
    handleInputBlur() {
      dispatch(actions.setSearchInputBlur())
    },
    handleMouseEnter() {
      dispatch(actions.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actions.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`
      if (page < totalPage) {
        dispatch(actions.changePage(page + 1))
      } else {
        dispatch(actions.changePage(1))
      }
    },
    logout() {
      dispatch(actions.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
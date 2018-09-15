import React, {PureComponent}  from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import * as actions from '../../store/actionCreator'
import {
  LoginWrapper,
  LoginIcon,
  LoginBox,
  LoginTitle,
  LoginForm,
  LoginFormInput,
  Input,
  LoginBtnItem,
  LoginButton,
  MoreLoginWrapper,
  MoreTitle,
  MoreLogin,
  MoreLoginItem
} from './style'

class Login extends PureComponent {
  render () {
    const {isLogin , checkedChange} = this.props

    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginIcon>
            <Link to="/">
              <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="logo" />
            </Link>
          </LoginIcon>
          <LoginBox>
            < LoginTitle>
              <Link to="/sing_in" className="login_title_item active">登录</Link>
              <b>·</b>
              <Link to="/sing_up" className="login_title_item">注册</Link>
            </LoginTitle>
            <div>
              <LoginForm>
                <LoginFormInput className="restyle" >
                  <i className="iconfont">&#xe734;</i>
                  <Input type="text" placeholder="手机号或邮箱" innerRef={input => this.account = input}/>
                </LoginFormInput>
                <LoginFormInput >
                  <i className="iconfont">&#xe604;</i>
                  <Input type="password" placeholder="密码" innerRef={input => this.password = input}/>
                </LoginFormInput>
                <div>
                  <LoginBtnItem className="left">
                    <input type="checkbox" checked="checked" onChange={checkedChange} />
                    记住我
                  </LoginBtnItem>
                  <LoginBtnItem className="right">登录遇到问题?</LoginBtnItem>
                </div>
                <LoginButton onClick={() => this.props.login(this.account, this.password)}>登录</LoginButton>
              </LoginForm>
              <MoreLoginWrapper>
                <MoreTitle>社交账号登录</MoreTitle>
                <MoreLogin>
                  <MoreLoginItem><i className="iconfont ic-weibo">&#xe600;</i></MoreLoginItem>
                  <MoreLoginItem><i className="iconfont ic-wechat">&#xe62d;</i></MoreLoginItem>
                  <MoreLoginItem><i className="iconfont ic-qq_connect">&#xe623;</i></MoreLoginItem>
                  <MoreLoginItem><i className="iconfont ic-more">&#xe632;</i></MoreLoginItem>
                </MoreLogin>
              </MoreLoginWrapper>
            </div>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }

}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actions.login(accountEle.value, passwordEle.value))
  },
  checkedChange() {}
})

export default connect(mapState, mapDispatch)(Login)
import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background: #f1f1f1;
  text-align: center;
  font-size: 14px;
  &::before {
    content: '';
    display: inline-block;
    height: 85%;
    vertical-align: middle;
  }
`;

export const LoginIcon = styled.div`
  position: absolute;
  top: 56px;
  margin-left: 50px;
`;

export const LoginBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h4`
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #969696;
  .login_title_item{
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    color: #969696;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom:2px solid #ea6f5a
    }
  }
  .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
  b{
    padding: 10px;
  }
`;

export const LoginForm = styled.form`
  margin-bottom: 30px;
`;

export const LoginFormInput = styled.div`
  position: relative;
  width: 100%;
  &.restyle{
    input {
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    }
  }
  i {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
  }
`;

export const Input = styled.input`
  box-sizing:border-box;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
`;

export const LoginBtnItem = styled.div`
  margin: 15px 0;
  &.left {
    float: left;
    font-size: 15px;
    color: #969696;
    vertical-align: middle
  }
  &.right {
    float: right;
    position: relative;
    font-size: 14px;
    color: #999;
  }
`;

export const LoginButton = styled.div`
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border:none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  clear: both;
  &:hover {
    background: #187cb7
  }
`;

export const MoreLoginWrapper = styled.div`
  margin-top: 50px;
`;

export const MoreTitle = styled.h6`
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
  &::before, &::after {
    content: '';
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
  }
  &::before {
    left: 30px;
  }
  &::after {
    right: 30px;
  }
`;

export const MoreLogin = styled.ul`
  margin-bottom: 10px;
  list-style: none;
`;

export const MoreLoginItem = styled.li`
  margin: 0 5px;
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  i {
    font-size: 28px;
    &.ic-weibo {
      color: #e05244
    }
    &.ic-wechat {
      color: #00bb29
    }
    &.ic-qq_connect {
      color: #498ad5
    }
    &.ic-more {
      color: #999;
    }
  }
`;
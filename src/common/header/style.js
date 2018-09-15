import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const Headers = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 58px;
  margin: 0 auto;

`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing:border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 58px;
  padding:0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
    margin-right: 15px;
    &:hover {
      background-color:hsla(0,0%,71%,.1)!important;
    }
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 320px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 240px;
  }
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  margin-top: 10px;
  width: 240px;
  padding:20px 20px 10px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
  border-bottom: 1px solid #f0f0f0;
  &::before {
    position: absolute;
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
    top: -5px;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
`;

export const Button = styled.div`
  display: inline-block;
  vertical-align: middle;
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
    &:hover {
      color:#ec6149;
      border-color:#ec6149;
      background-color:rgba(236,97,73,.05);
    }
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    .iconfont {
      margin-right: 3px;
      font-size: 19px;
    }
  }
`;
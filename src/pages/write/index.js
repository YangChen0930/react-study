import React, {PureComponent}  from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent {
  render () {
    const {isLogin} = this.props
    console.log(isLogin)

    if (isLogin) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }

}

const mapState = (state) => ({
  isLogin: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write)
import React, {PureComponent}  from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {DetailWrapper, Header, Content} from './style'
import * as actions from '../../store/actionCreator'

class Detail extends PureComponent {
  render () {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actions.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))
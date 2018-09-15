import React, {PureComponent}  from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import * as actions  from '../../../store/actionCreator'
import {Link} from 'react-router-dom'

class List extends PureComponent {
  render () {
    const {list, page, getMoreList} = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <Link key={item.get('id')} to={"/detail/" + item.get('id')}>
                <ListItem >
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                  <img className="pic" src={item.get('imgUrl')} />
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actions.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)
import React from 'react'
import { connect } from 'react-redux'
import { fetchDataIfNeeded } from '../app/actions'
import PropTypes from 'prop-types'
import * as API from '../../constants'
import { Table } from 'react-bootstrap'

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDataIfNeeded(API.API_COINS_URL))
  }
  
  render() {
    const { data } = this.props
    return (
      <Table striped bordered condensed hover>
        {data && data.header &&
          <thead>
            <tr>
              {data.header.map(col => <td key={col}>{col}</td>)}
            </tr>
          </thead>
<<<<<<< HEAD
        }
        <tbody>
        {data && data.coins &&
          data.coins.map((coin, i) =>
            <tr key={i}>
              {coin.map((col, j) => <td key={i+j}>{col}</td>)}
            </tr>
          )
        }
        </tbody>      
=======
        }      
>>>>>>> origin/master
      </Table>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { isFetching, lastUpdated, data } = state.coinData
 
  return {
    data,
    isFetching,
    lastUpdated
  }
}
 
export default connect(mapStateToProps)(Home)

import React from 'react'
import { connect } from 'react-redux'
import { fetchDataIfNeeded } from '../app/actions'
import PropTypes from 'prop-types'
import * as API from '../../constants'
import CoinTable from '../../component/coinTable'

class Normalized extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDataIfNeeded(API.API_PRICE_URL, API.API_PRICE_URL))
  }
  
  render() {
    const { data } = this.props
    return (
      <CoinTable {...data} />      
    )
  }
}

Normalized.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { dataByPage } = state
  const { data } = 
    dataByPage[API.API_PRICE_URL] || 
    { 
      data: { 
        header: [], 
        coins: [],
        title: "",
        captions: []
      } 
    }

  return {
    data
  }
}
 
export default connect(mapStateToProps)(Normalized)

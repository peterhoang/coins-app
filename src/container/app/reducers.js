import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR
} from './actions'

function coinData(
  state = {
    isFetching: false,
    didInvalidate: false,
    data: null
  },
  action
) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case REQUEST_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
      })
    case REQUEST_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: null,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({coinData})

export default rootReducer

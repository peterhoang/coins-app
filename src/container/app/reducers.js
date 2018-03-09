import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR
} from './actions'

function pageData(
  state = {
    isFetching: false,
    didInvalidate: false,
    data: {
      header: [],
      coins: [],
      captions: [],
      title: ""
    }
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

function dataByPage(state = {}, action) {
  switch (action.type) {
    case REQUEST_DATA:
    case REQUEST_DATA_SUCCESS:
    case REQUEST_DATA_ERROR:
      return Object.assign({}, state, {
        [action.page]: pageData(state[action.page], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({dataByPage})

export default rootReducer

import fetch from 'cross-fetch'
import { APIHOST } from '../../constants'

export const REQUEST_DATA = 'app/actions/REQUEST_DATA'
export const REQUEST_DATA_SUCCESS = 'app/actions/REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_ERROR = 'app/actions/REQUEST_DATA_ERROR'

function requestData() {
  return {
    type: REQUEST_DATA
  }
}

function requestDataSuccess(json) {
  return {
    type: REQUEST_DATA_SUCCESS,
    data: json.data,
    receivedAt: Date.now()
  }
}

function requestDataFail(error) {
  return {
    type: REQUEST_DATA_ERROR,
    error: error,
    receivedAt: Date.now()
  }
}

function fetchData(url) {
  return (dispatch) => {
    dispatch(requestData());
    return fetch(`${APIHOST}${url}`)
      .then(
        response => response.json(),
        error => dispatch(requestDataFail(error))
      )
      .then(json => dispatch(requestDataSuccess(json)))
  }
}

function shouldFetchData(state) {
  const items = state.items
  if (!items) {
    return true
  } else if (state.isFetching) {
    return false
  } else {
    return state.didInvalidate
  }
}
 
export function fetchDataIfNeeded(url) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.
 
  // This is useful for avoiding a network request if
  // a cached value is already available.
 
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchData(url))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
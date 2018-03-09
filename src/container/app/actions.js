import fetch from 'cross-fetch'
import { APIHOST } from '../../constants'

export const REQUEST_DATA = 'app/actions/REQUEST_DATA'
export const REQUEST_DATA_SUCCESS = 'app/actions/REQUEST_DATA_SUCCESS'
export const REQUEST_DATA_ERROR = 'app/actions/REQUEST_DATA_ERROR'

function requestData(page) {
  return {
    type: REQUEST_DATA,
    page: page
  }
}

function requestDataSuccess(json, page) {
  return {
    type: REQUEST_DATA_SUCCESS,
    data: json.data,
    page: page,
    receivedAt: Date.now()
  }
}

function requestDataFail(error, page) {
  return {
    type: REQUEST_DATA_ERROR,
    error: error,
    page: page,
    receivedAt: Date.now()
  }
}

function shouldFetchData(state, page) {
  const data = state.dataByPage[page]
  if (!data) {
    return true
  } else if (state.isFetching) {
    return false
  } else {
    return state.didInvalidate
  }
}

export function fetchData(url, page) {
  return (dispatch) => {
    dispatch(requestData(page));
    return fetch(`${APIHOST}${url}`)
      .then(
        response => response.json(),
        error => dispatch(requestDataFail(error, page))
      )
      .then(json => dispatch(requestDataSuccess(json, page)))
  }
}

export function fetchDataIfNeeded(url, page) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.
  
  return (dispatch, getState) => {
    if (shouldFetchData(getState(), page)) {
      return dispatch(fetchData(url, page))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
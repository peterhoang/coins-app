import fetch from 'cross-fetch'
import { APIHOST } from '../../constants'
import mockdata from '../../mock/coins'

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
    
    // I may have blocked myself from the data server oops...temp fix by using mock data
    return dispatch(requestDataSuccess(mockdata, page))
    
    //  return fetch(`${APIHOST}${url}`)
    //    .then(
    //      response => response.json()
    //    )
    //    .then(
    //      json => dispatch(requestDataSuccess(json, page)),
    //      error => dispatch(requestDataFail(error, page))
    //    )

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
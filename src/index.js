import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './container/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'

import './index.css';
import * as API from './constants';
import { fetchDataIfNeeded } from './container/app/actions';

const store = configureStore();

//store.dispatch(fetchDataIfNeeded(API.API_COINS_URL))
//     .then(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

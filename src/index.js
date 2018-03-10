import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './container/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

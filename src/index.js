import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import RestoServiceContext from './components/resto-service-context';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import RestoService from './services/resto-service';
import ErrorBoundry from './components/error-boundry';

import './index.scss';

const store = createStore(reducer);
const restoService = new RestoService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    
    , document.getElementById('root'));


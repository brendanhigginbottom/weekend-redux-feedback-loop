import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Imports for redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers

// Feeling Reducer

// Understanding Reducer

// Support Reducer

// Comments Reducer

// Redux store
const storeInstance = createStore(
    combineReducers(
        {
            // reducers added to store here
        }
    ),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);

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
const feelingValue = (state = 'test', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }

    return state;
};

// Understanding Reducer

// Support Reducer

// Comments Reducer

// Redux store
const storeInstance = createStore(
    combineReducers(
        {
            // reducers added to store here
            feelingValue
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

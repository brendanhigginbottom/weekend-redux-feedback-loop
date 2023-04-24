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
const feelingValue = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }

    return state;
};

// Understanding Reducer
const understandingValue = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }

    return state;
};

// Support Reducer
const supportValue = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }

    return state;
}

// Comments Reducer
const commentsValue = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }

    return state;
}

// Redux store
const storeInstance = createStore(
    combineReducers(
        {
            // reducers added to store here
            feelingValue,
            understandingValue,
            supportValue,
            commentsValue,
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

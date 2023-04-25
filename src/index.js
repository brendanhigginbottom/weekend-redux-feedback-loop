import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Imports for redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//Imports for saga
import { createSagaMiddleware } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

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

//put saga
function* postValues(action) {
    //generator function for axios post request
    try {
        yield axios.post('/survey', action.payload);
    } catch (error) {
         console.log(`error in postValues${error}`);
         alert('Something went wrong');
    }
}

//root saga
function* rootSaga() {
    yield takeEvery('ADD_VALUES', postValues);
}

const sagaMiddleware = createSagaMiddleware();

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
    applyMiddleware(sagaMiddleware, logger)
);

//root saga to middleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);

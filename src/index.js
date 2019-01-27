import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//reducers go here
const feedbackStart = { feeling: null };
const receivedFeedback = ( state = feedbackStart, action ) => {
    switch ( action.type ) {
        case 'RECEIVE_FEELING': 
            return { ...state, ...action.payload }

        default:
            break;
    }
    return state;
}



//end reducers

const storeInstance = createStore(
    combineReducers({
        receivedFeedback
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

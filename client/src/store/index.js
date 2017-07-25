import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducer,composeWithDevTools(
    applyMiddleware(thunk,promise)
));
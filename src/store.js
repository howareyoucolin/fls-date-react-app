import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

import postReducer from '~/src/reducers/postReducer';

const Store = createStore(postReducer, applyMiddleware(logger, thunk));
export default Store;
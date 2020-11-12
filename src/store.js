import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

import postReducer from '~/src/reducers/post-reducer';

const Store = createStore(postReducer, applyMiddleware(logger));
export default Store;
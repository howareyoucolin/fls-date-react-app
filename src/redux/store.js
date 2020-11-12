import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

const initialState = {
  posts: []
};

function postReducer(state = initialState, action){
	if (action.type === 'INIT_POSTS'){
		return {
      ...state,
      posts: action.payload
    }
	}
  return state;
};

const Store = createStore(postReducer, applyMiddleware(logger));

export default Store;
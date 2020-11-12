import { createStore } from 'redux'

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

const Store = createStore(postReducer);

export default Store;
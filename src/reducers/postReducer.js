const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action){
	if (action.type === 'INIT_POSTS'){
		return {
      ...state,
      posts: action.payload
    }
	}
  return state;
};
const initialState = {
	post: {},
  posts: []
};

export default function postReducer(state = initialState, action){
	if (action.type === 'INIT_POST'){
		return {
      ...state,
      post: action.payload
    }
	}
	else if (action.type === 'INIT_POSTS'){
		return {
      ...state,
      posts: action.payload
    }
	}
  return state;
};
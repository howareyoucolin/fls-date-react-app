const initialState = {
	post: {},
	postInited: false,
  posts: [],
	postsInited: false
};

export default function postReducer(state = initialState, action){
	if (action.type === 'INIT_POST'){
		return {
      ...state,
      post: action.payload
    }
	}
	else if (action.type === 'POST_INITED'){
		return {
      ...state,
      postInited: true
    }
	}
	else if (action.type === 'INIT_POSTS'){
		return {
      ...state,
      posts: action.payload
    }
	}
	else if (action.type === 'POSTS_INITED'){
		return {
      ...state,
      postsInited: true
    }
	}
  return state;
};
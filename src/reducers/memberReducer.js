const initialState = {
  member: {}
};

export default function memberReducer(state = initialState, action){
	if (action.type === 'INIT_MEMBER'){
		return {
      ...state,
      member: action.payload
    }
	}
  return state;
};
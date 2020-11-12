const initialState = {
  member: {},
	members: []
}

export default function memberReducer(state = initialState, action){
	if (action.type === 'INIT_MEMBER'){
		return {
      ...state,
      member: action.payload
    }
	}
	else if (action.type === 'INIT_MEMBERS'){
		return {
      ...state,
      members: action.payload
    }
	}
  return state
}
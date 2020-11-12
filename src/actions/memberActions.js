import axios from 'axios'

export function fetchMember(id){
	return dispatch => {
		axios.get(`https://api.369usa.com/member/?id=${id}`)
      .then(result => {
				dispatch({type:'INIT_MEMBER', payload: result.data});
      })
	}
}

export function fetchMembers(){
	return dispatch => {
		axios.get('https://api.369usa.com/members/')
      .then(result => {
				dispatch({type:'INIT_MEMBERS', payload: result.data});
      })
	}
}
import axios from 'axios'

export function fetchMember(id){
	return dispatch => {
		axios.get(`https://api.369usa.com/member/?id=${id}`)
      .then(result => {
				dispatch({type:'INIT_MEMBER', payload: result.data});
      })
	}
}
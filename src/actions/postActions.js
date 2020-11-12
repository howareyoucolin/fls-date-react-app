import axios from 'axios'

export function fetchPosts(){
	return dispatch => {
		axios.get('https://api.369usa.com/posts/')
      .then(result => {
				dispatch({type:'INIT_POSTS', payload: result.data});
      })
	}
}
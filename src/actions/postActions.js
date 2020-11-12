import axios from 'axios'

export function fetchPost(slug){
	return dispatch => {
		axios.get(`https://api.369usa.com/post/?slug=${slug}`)
      .then(result => {
				dispatch({type:'INIT_POST', payload: result.data});
      })
	}
}

export function fetchPosts(){
	return dispatch => {
		axios.get('https://api.369usa.com/posts/')
      .then(result => {
				dispatch({type:'INIT_POSTS', payload: result.data});
      })
	}
}
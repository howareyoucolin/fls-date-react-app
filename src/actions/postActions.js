import axios from 'axios'

export function initPost(slug){
	return (dispatch, getState) => {
		if(!getState().posts.postInited){
			dispatch({type:'POST_INITED'});
			axios.get(`https://api.369usa.com/post/?slug=${slug}`)
				.then(result => {
					dispatch({type:'INIT_POST', payload: result.data});
				})
		}
	}
}

export function initPosts(){
	return (dispatch, getState) => {
		if(!getState().posts.postsInited){
			dispatch({type:'POSTS_INITED'});
			axios.get('https://api.369usa.com/posts/')
				.then(result => {
					dispatch({type:'INIT_POSTS', payload: result.data});
				})
		}
	}
}
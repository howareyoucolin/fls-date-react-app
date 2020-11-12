import {combineReducers} from 'redux'
import posts from '~/src/reducers/postReducer'
import members from '~/src/reducers/memberReducer'

export default combineReducers({
  posts,
  members
})
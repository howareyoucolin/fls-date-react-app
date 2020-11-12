import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '~/src/reducers/rootReducer'

const Store = createStore(rootReducer, applyMiddleware(logger, thunk))
console.log(Store.getState())
export default Store
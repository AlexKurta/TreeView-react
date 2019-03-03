import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import api from './middlewares/api'

const store = createStore(rootReducer, {}, applyMiddleware(api))

export default store

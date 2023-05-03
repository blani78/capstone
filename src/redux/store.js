import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

const middleware = [thunk]

const initailState = {}

const store = createStore(
  rootReducer,
  initailState,
  compose(
    applyMiddleware(...middleware)
  )
)

export default store
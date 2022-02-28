import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const dev = process.env.NODE_ENV === 'development'

let middleware = dev
  ? applyMiddleware(logger, sagaMiddleware)
  : applyMiddleware(sagaMiddleware)

if (dev) {
  middleware = composeWithDevTools(middleware)
}

const store = createStore(rootReducer, middleware)

sagaMiddleware.run(rootSaga)

export default store

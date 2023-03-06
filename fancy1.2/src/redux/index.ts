import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers, Store } from "redux"
import reduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import reduxPromise from 'redux-promise'
// import auth from './modules/auth/reducer'

const reducer = combineReducers({
    // auth
})

const persistConfig = {
    key: 'redux-state',
    storage: storage
}

const persistedReducerConfig = persistReducer(persistConfig, reducer)

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const composeEnhancers = compose

const middleWares = applyMiddleware(reduxThunk, reduxPromise)

const store: Store = createStore(
    persistedReducerConfig,
    composeEnhancers(middleWares)
)

const persistor = persistStore(store)

export { store, persistor } 
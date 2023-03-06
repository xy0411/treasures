import { combineReducers } from 'redux'
import numReducer from './numReducer'

export default combineReducers({ num: numReducer })
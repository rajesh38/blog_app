import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import loginPage from './loginPage'

const rootReducer = combineReducers({
  loginPage,
  toastr: toastrReducer
})

export default rootReducer
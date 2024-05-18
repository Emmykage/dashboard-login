import { applyMiddleware, combineReducers } from "redux";
import appSlice from  './application/appReducer'
import userSlice from './auth/auth'
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
    app: appSlice,
    auth: userSlice
})


const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))

export default store
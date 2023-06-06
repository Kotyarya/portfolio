import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(
    rootReducer,
    composedEnhancer
)

export default store
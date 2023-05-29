import {combineReducers} from "@reduxjs/toolkit";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    langReducer,
    themeReducer
})

export default rootReducer
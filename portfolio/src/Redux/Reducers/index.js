import {combineReducers} from "@reduxjs/toolkit";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";
import {reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
    langReducer,
    themeReducer,
    form: formReducer
})

export default rootReducer
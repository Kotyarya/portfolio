import {combineReducers} from "@reduxjs/toolkit";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";
import {reducer as formReducer} from "redux-form"
import contactFormReducer from "./contactFormReducer";

const rootReducer = combineReducers({
    langReducer,
    themeReducer,
    contactFormReducer,
    form: formReducer
})

export default rootReducer
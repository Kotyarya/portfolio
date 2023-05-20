import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./Reducers/themeReducer";
import langReducer from "./Reducers/langReducer";

export const store = configureStore({
    reducer: {
        themeState: themeReducer,
        langState: langReducer
    },
    devTools: true
})
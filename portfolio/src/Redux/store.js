import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./Reducers/themeReducer";
import langReducer from "./Reducers/langReducer";
import skillsReducer from "./Reducers/skillsReducer";

export const store = configureStore({
    reducer: {
        themeState: themeReducer,
        langState: langReducer,
        skillsState: skillsReducer
    },
    devTools: true
})
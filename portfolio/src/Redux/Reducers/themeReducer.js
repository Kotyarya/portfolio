import {SETTHEME} from "../Other/Types/themeTypes";

const initialState = {
    theme: localStorage.getItem("theme") || "dark"
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTHEME :
            const theme = state.theme === "dark" ? "light" : "dark"
            localStorage.setItem("theme", theme)
            return {
                ...state,
                theme: theme
            }
        default :
            return state
    }
}

export default themeReducer
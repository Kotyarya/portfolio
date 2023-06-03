import {SETLANGUAGE} from "../Other/Types/langTypes";

const initialState = {
    lang: localStorage.getItem("lang") || "eng"
}

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETLANGUAGE :
            debugger
            localStorage.setItem("lang", action.lang)
            return {
                ...state,
                lang: action.lang
            }

        default :
            return state
    }
}

export default langReducer
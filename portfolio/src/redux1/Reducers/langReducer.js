const initialState = {
    lang: localStorage.getItem("lang") || "eng"
}

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETLANGUAGE" :
            const lang = state.lang === "eng" ? "pln" : "eng"
            localStorage.setItem("lang", lang)
            return {
                ...state,
                lang: lang
            }

        default :
            return state
    }
}

export default langReducer
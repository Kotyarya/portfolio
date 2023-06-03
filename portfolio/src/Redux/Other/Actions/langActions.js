import {SETLANGUAGE} from "../Types/langTypes";

const setLanguage = (lang) => {
    return {
        type: SETLANGUAGE,
        lang
    }
}

export default setLanguage
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem("lang") || "eng"
}

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        selectLang: (state, action) => {
            state.lang = action.payload
            localStorage.setItem("lang", state.lang)
        }
    }
})

export const {selectLang} = langSlice.actions

export default langSlice.reducer
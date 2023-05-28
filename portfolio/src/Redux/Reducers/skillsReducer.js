import {createSlice} from "@reduxjs/toolkit";
import {skillsData} from "../other/data";

const initialState = {
    items: skillsData
}

export const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        getItems: () => {

        }
    }
})

export const {getItems} = skillsSlice.actions

export default skillsSlice.reducer
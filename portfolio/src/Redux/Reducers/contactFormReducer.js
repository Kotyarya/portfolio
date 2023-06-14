import {TOGGLEISFETCING} from "../Other/Types/contactFormTypes";
import {toggleIsFetching} from "../Other/Actions/contactFormActions";
import * as emailjs from "@emailjs/browser";

const initialState = {
    isFetching: false
}

const contactFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLEISFETCING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default :
            return state
    }
}

export default contactFormReducer

export const sendMessage = (value) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const response = await emailjs.send('service_4quvjob', 'template_8c8brpo', value, "crgi2dH2RVZbWBgMU")
        console.log(response.text)
    } catch (e) {
        alert(`
        An error occurred and the message was not sent
        Error type: ${e.status}`)
    }
    dispatch(toggleIsFetching(false))
}
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

export const sendMessage = (value) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    emailjs.send('service_4quvjob', 'template_8c8brpo', value, "crgi2dH2RVZbWBgMU")
        .then(response => {
            dispatch(toggleIsFetching(false))
        })
}
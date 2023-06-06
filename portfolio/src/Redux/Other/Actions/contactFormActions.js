import {TOGGLEISFETCING} from "../Types/contactFormTypes";

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLEISFETCING,
        isFetching
    }
}
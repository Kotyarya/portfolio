import ContactPage from "./ContactPage";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../Redux/Reducers/contactFormReducer";
import {SubmissionError} from "redux-form";

const ContactPageContainer = () => {

    const dispatch = useDispatch()

    const submit = (value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
            throw new SubmissionError({
                _error: 'Incorrect email'
            })
        } else {
            dispatch(sendMessage(value))
            throw new SubmissionError({
                _error: undefined
            })
        }
    }
    const theme = useSelector(state => state.themeReducer.theme)
    const isFetching = useSelector(state => state.contactFormReducer.isFetching)

    return (
        <ContactPage submit={submit} theme={theme} isFetching={isFetching}/>
    )
}

export default compose(withHeader)(ContactPageContainer)
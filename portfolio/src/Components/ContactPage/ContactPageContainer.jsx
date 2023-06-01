import ContactPage from "./ContactPage";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import {useSelector} from "react-redux";
import * as emailjs from "@emailjs/browser";

const ContactPageContainer = () => {
    const submit = (value) => {
        emailjs.send('service_4quvjob', 'template_8c8brpo', value, "crgi2dH2RVZbWBgMU")
        console.log(value)
    }

    const theme = useSelector(state => state.themeReducer.theme)

    return (
        <ContactPage submit={submit} theme={theme}/>
    )
}

export default compose(withHeader)(ContactPageContainer)
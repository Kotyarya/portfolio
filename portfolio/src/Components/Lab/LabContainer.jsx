import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import Lab from "./Lab";
import {useSelector} from "react-redux";

const LabContainer = (props) => {

    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)

    return (
        <Lab theme={theme} lang={lang}/>
    )
}

export default compose(withHeader)(LabContainer)
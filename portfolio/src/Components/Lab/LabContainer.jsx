import withHeader from "../../HOC/withHeader";
import Lab from "./Lab";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {project} from "../../Redux/Other/data";

const LabContainer = () => {

    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)
    const navigate = useNavigate()


    return (
        <Lab theme={theme} lang={lang} navigate={navigate} project={project}/>
    )
}

export default withHeader(LabContainer)
import SkillsPage from "./SkillsPage";
import {useSelector} from "react-redux";
import {skillsData} from "../../Redux/Other/data";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import withFooter from "../../HOC/withFooter";

const SkillsPageContainer = (props) => {
    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)
    const setText = (textEng, textPln) => lang === "eng" ? textEng : textPln
    const itemsSkills = skillsData.skills
    const itemsApp = skillsData.app
    return <SkillsPage theme={theme} lang={lang} setText={setText} itemsSkills={itemsSkills} itemsApp={itemsApp}/>
}

export default compose(withHeader, withFooter)(SkillsPageContainer)
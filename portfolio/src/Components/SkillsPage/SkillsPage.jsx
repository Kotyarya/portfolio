import {connect} from "react-redux";
import {toggleTheme} from "../../Redux/Reducers/themeReducer";
import {selectLang} from "../../Redux/Reducers/langReducer";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import style from "./SkillsPage.module.scss"

const SkillsPage = (props) => {
    return (
        <div className={style.content}>
            <article>
                <h2 className="textPreahvihear">My <span className="redText">Skills</span></h2>
            </article>
            <div></div>
            <div></div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        theme: state.themeState.theme,
        lang: state.langState.lang
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleTheme,
        selectLang
    }),
    withHeader
)
(SkillsPage)
import {connect} from "react-redux";
import {toggleTheme} from "../../Redux/Reducers/themeReducer";
import {selectLang} from "../../Redux/Reducers/langReducer";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import style from "./SkillsPage.module.scss"
import Skill from "./Skill/Skill";
import htmlImg from "./img/htmlImg.png"
import cssImg from "./img/cssImg.png"
import jsImg from "./img/jsImg.png"

const SkillsPage = (props) => {
    const htmlData = {
        title: "HTML",
        description: `HTML stands for "Hypertext Markup Language". HTML is responsible for the structure and content of a page.`,
        logo: htmlImg
    }
    const cssData = {
        title: "CSS",
        description: `CSS stands for "Cascading Style Sheets". The CSS language is responsible for the appearance of the page.`,
        logo: cssImg
    }
    const jsData = {
        title: "JavaScript",
        description: "JavaScript programming language was invented specifically to create interactive websites. A JavaScript program is a sequence of instructions, that is, instructions to the browser to do something.",
        logo: jsImg
    }


    return (
        <div className={style.content}>
            <article>
                <h2 className="textPreahvihear">My <span className="redText">Skills</span></h2>
            </article>
            <div className={style.skillsContainer}>
                {[htmlData, cssData, jsData].map((item) => {
                    return (<Skill {...item}/>)
                })}
            </div>
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
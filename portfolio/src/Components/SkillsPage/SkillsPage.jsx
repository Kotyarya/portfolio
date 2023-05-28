import {useSelector} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import style from "./SkillsPage.module.scss"
import skillsBlockForDarkImg from "./img/skillsBlockForDarkImg.png"
import skillsBlockForLightImg from "./img/skillsBlockForLightImg.png"
import logoDark from "../../assets/img/logoForDark.png"
import Footer from "../Footer/Footer";
import Skill from "./Skill/Skill";
import {nanoid} from "nanoid";

const SkillsPage = (props) => {

    const items = useSelector(state => state.skillsState.items)
    const theme = useSelector(state => state.themeState.theme)
    const lang = useSelector(state => state.langState.lang)
    console.log(items)

    return (
        <div className={style.content} theme={theme}>
            <span className={style.gradient}></span>
            <article>
                <h2 className="textPreahvihear">My <span className="redText">Skills</span></h2>
            </article>
            <div className={style.skillsContainer}>
                {items.skills.map((item) => {
                    return (<Skill key={nanoid(10)} lang={lang} theme={theme} {...item}/>)
                })}
            </div>
            <article>
                <p className="textPreahvihear">Applications</p>
            </article>
            <div className={style.appContainer}>
                {items.app.map((item) => {
                    return (<Skill key={nanoid(10)} lang={lang} theme={theme} {...item}/>)
                })}
            </div>
            <div className={style.skillsBlockImg}>
                <img className={style.logo} src={logoDark} alt=""/>
                <img src={theme === "light" ? skillsBlockForLightImg : skillsBlockForDarkImg} alt=""/>
            </div>
            <Footer/>
        </div>
    )
}


export default compose(
    withHeader
)
(SkillsPage)
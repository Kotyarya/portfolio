import style from "./SkillsPage.module.scss"
import skillsBlockForDarkImg from "./img/skillsBlockForDarkImg.png"
import skillsBlockForLightImg from "./img/skillsBlockForLightImg.png"
import logoDark from "../../assets/img/logoForDark.png"
import Skill from "./Skill/Skill";
import {nanoid} from "nanoid";

const SkillsPage = (props) => {

    return (
        <div className={style.content} theme={props.theme}>
            <span className={style.gradient}></span>
            <article>
                <h2 className="textPreahvihear">My <span className="redText">Skills</span></h2>
            </article>
            <div className={style.skillsContainer}>
                {props.itemsSkills.map((item) => {
                    return (<Skill key={nanoid(10)} lang={props.lang} theme={props.theme}
                                   setText={props.setText} {...item}/>)
                })}
            </div>
            <article>
                <p className="textPreahvihear">Applications</p>
            </article>
            <div className={style.appContainer}>
                {props.itemsApp.map((item) => {
                    return (<Skill key={nanoid(10)} lang={props.lang} theme={props.theme}
                                   setText={props.setText} {...item}/>)
                })}
            </div>
            <div className={style.skillsBlockImg}>
                <img className={style.logo} src={logoDark} alt=""/>
                <img src={props.theme === "light" ? skillsBlockForLightImg : skillsBlockForDarkImg} alt=""/>
            </div>
        </div>
    )
}


export default SkillsPage
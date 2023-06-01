import style from "./Skill.module.scss"
import effectForDarkImg from "./img/effectForDarkImg.png"
import effectForLightImg from "./img/effectForLightImg.png"

const Skill = (props) => {
    return (
        <div className={style.block} theme={props.theme}>
            <div className={style.img}>
                <img className={style.logoImg} src={props.logo} alt=""/>
                <img className={style.effectImg} src={props.theme === "light" ? effectForLightImg : effectForDarkImg}
                     alt=""/>
            </div>
            <div className={style.text}>
                <h2 className=" textPoppins600">{props.title}</h2>
                <p className={style.description + " textPoppins500"}>{props.setText(props.descriptionEng, props.descriptionPln)}</p>
            </div>
        </div>
    )
}

export default Skill
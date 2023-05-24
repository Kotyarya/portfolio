import style from "./Skill.module.scss"
import effectImg from "./img/effectImg.png"

const Skill = (props) => {
    return (
        <div className={style.block}>
            <div className={style.img}>
                <img className={style.logoImg} src={props.logo} alt=""/>
                <img className={style.effectImg} src={effectImg} alt=""/>
            </div>
            <div className={style.text}>
                <h2 className=" textPoppins600">{props.title}</h2>
                <p className={style.description + " textPoppins500"}>{props.description}</p>
            </div>
        </div>
    )
}

export default Skill
import style from "./Header.module.scss"
import logoForDark from "../../assets/img/logoForDark.png"
import logoForLight from "../../assets/img/logoForLight.png"
import moon from "./img/darkThemeIcon.png"
import sun from "./img/lightThemeIcon.png"
import langForDark from "./img/langIconForDark.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header} theme={props.theme}>
            {props.editMode
                ? <div onClick={() => props.toggleEditMode(false)}
                       className={style.selectLang}>
                    <button onClick={() => props.setLanguage("eng")} className={style.langBtn}>ENG</button>
                    <span className={style.span}></span>
                    <button onClick={() => props.setLanguage("pln")} className={style.langBtn}>PLN</button>
                </div>
                : null
            }
            <NavLink to={"/"}>
                <img className={style.logo} src={props.theme === "light" ? logoForLight : logoForDark} alt=""/>
            </NavLink>
            <nav className={style.nav + " textPlusJakarta"}>
                <ul className={style.list}>
                    <NavLink to={"/skills"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>{props.lang === "eng" ? "Skills" : "Umiejętności"}</NavLink>
                    <NavLink to={"/lab"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>Lab</NavLink>
                    <NavLink to={"/contact"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>{props.lang === "eng" ? "Contact" : "Kontakt"}</NavLink>
                </ul>
                <button onClick={() => props.setTheme()} className={style.btn}>
                    <img src={props.theme === "light" ? sun : moon} alt=""/>
                </button>
                <button onClick={() => props.toggleEditMode(true)} className={style.btn}>
                    <img className={style.langIcon} src={langForDark} alt=""/>
                </button>
            </nav>
        </header>
    )
}


export default Header
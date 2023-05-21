import style from "./Header.module.scss"
import logoForDark from "./img/logoForDark.png"
import logoForLight from "./img/logoForLight.png"
import moon from "./img/darkThemeIcon.png"
import sun from "./img/lightThemeIcon.png"
import langForDark from "./img/langIconForDark.png"
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = (props) => {
    const [editMode, toggleEditMode] = useState(false)
    return (
        <header className={style.header} theme={props.theme}>
            {editMode
                ? <div onClick={() => toggleEditMode(false)}
                       className={style.selectLang}>
                    <button onClick={() => props.selectLang("eng")} className={style.langBtn}>ENG</button>
                    <span className={style.span}></span>
                    <button onClick={() => props.selectLang("pln")} className={style.langBtn}>PLN</button>
                </div>
                : ""
            }
            <NavLink to={"/home"}>
                <img className={style.logo} src={props.theme === "light" ? logoForLight : logoForDark} alt=""/>
            </NavLink>
            <nav className={style.nav + " textPlusJakarta"}>
                <ul className={style.list}>
                    <NavLink to={"/skills"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>{props.lang === "eng" ? "Skills" : "Umiejętności"}</NavLink>
                    <NavLink to={"/lab"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>{props.lang === "eng" ? "Lab" : "Laboratorium"}</NavLink>
                    <NavLink to={"/contact"}
                             className={({isActive}) => isActive ? `${style.item} ${style.active}` : style.item}>{props.lang === "eng" ? "Contact" : "Kontakt"}</NavLink>
                </ul>
                <button onClick={() => props.toggleTheme()} className={style.btn}>
                    <img src={props.theme === "light" ? sun : moon} alt=""/>
                </button>
                <button onClick={() => toggleEditMode(true)} className={style.btn}>
                    <img className={style.langIcon} src={langForDark} alt=""/>
                </button>
            </nav>
        </header>
    )
}


export default Header
import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import logoForLight from "../../assets/img/general/logoForLight.png";
import logoForDark from "../../assets/img/general/logoForDark.png";
import arrow from "./img/arrow.png";

const Footer = (props) => {
    return (
        <footer className={style.footer} theme={props.theme}>
            <NavLink to={"/"}>
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
            </nav>
            <button onClick={props.goTop} className={style.btnGoTop}>
                <img src={arrow} alt=""/>
                <span className={style.btnGoTopSpan}></span>
            </button>
        </footer>
    )
}


export default Footer
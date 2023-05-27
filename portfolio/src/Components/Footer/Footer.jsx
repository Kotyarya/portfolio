import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import logoForLight from "../../assets/img/logoForLight.png";
import logoForDark from "../../assets/img/logoForDark.png";
import {connect} from "react-redux";
import arrow from "./img/arrow.png";

const Footer = (props) => {

    const goTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


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
            <button onClick={goTop} className={style.btnGoTop}>
                <img src={arrow} alt=""/>
                <span className={style.btnGoTopSpan}></span>
            </button>
        </footer>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.langState.lang,
        theme: state.themeState.theme
    }
}


export default connect(mapStateToProps, {})(Footer)
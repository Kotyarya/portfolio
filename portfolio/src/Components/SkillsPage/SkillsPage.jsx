import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";
import style from "./SkillsPage.module.scss"
import Skill from "./Skill/Skill";
import htmlImg from "./img/htmlImg.png"
import cssImg from "./img/cssImg.png"
import jsImg from "./img/jsImg.png"
import reactImg from "./img/reactImg.png"
import reduxImg from "./img/reduxImg.png"
import sassImg from "./img/sassImg.png"
import figmaImg from "./img/figmaImg.png"
import webstormImg from "./img/webstormImg.png"
import skillsBlockForDarkImg from "./img/skillsBlockForDarkImg.png"
import skillsBlockForLightImg from "./img/skillsBlockForLightImg.png"
import logoDark from "../../assets/img/logoForDark.png"
import Footer from "../Footer/Footer";

const SkillsPage = (props) => {
    const htmlData = {
        title: "HTML",
        descriptionEng: `HTML stands for "Hypertext Markup Language". HTML is responsible for the structure and content of a page.`,
        descriptionPln: `HTML to skrót od "Hypertext Markup Language". HTML odpowiada za strukturę i zawartość strony.`,
        logo: htmlImg
    }
    const cssData = {
        title: "CSS",
        descriptionEng: `CSS stands for "Cascading Style Sheets". The CSS language is responsible for the appearance of the page.`,
        descriptionPln: `CSS to skrót od "Cascading Style Sheets" (Kaskadowe Arkusze Stylów). Język CSS jest odpowiedzialny za wygląd strony.`,
        logo: cssImg
    }
    const jsData = {
        title: "JavaScript",
        descriptionEng: "JavaScript is a programming language designed for building interactive websites. It consists of instructions for the browser to perform specific actions.",
        descriptionPln: `JavaScript to język programowania przeznaczony do tworzenia interaktywnych stron internetowych. Składa się z instrukcji dla przeglądarki do wykonywania określonych działań.`,
        logo: jsImg
    }
    const reactData = {
        title: "React",
        descriptionEng: "React.js is an open-source JavaScript library used for building user interfaces. It enables efficient implementation of reactivity, where changes in one element trigger corresponding changes in other elements.",
        descriptionPln: `React.js to biblioteka JavaScript o otwartym kodzie źródłowym używana do tworzenia interfejsów użytkownika. Umożliwia wydajną implementację reaktywności, w której zmiany w jednym elemencie powodują odpowiednie zmiany w innych elementach.`,
        logo: reactImg
    }
    const reduxData = {
        title: "Redux & Redux-Toolkit",
        descriptionEng: "Redux is a tool for managing data state and user interface in JavaScript applications with a large number of entities. It is a JavaScript library.",
        descriptionPln: `Redux to narzędzie do zarządzania stanem danych i interfejsem użytkownika w aplikacjach JavaScript z dużą liczbą podmiotów. Jest to biblioteka JavaScript.`,
        logo: reduxImg
    }
    const sassData = {
        title: "SASS",
        descriptionEng: "Sass is a metalanguage (a language for describing another language) that makes writing CSS code easier and faster.",
        descriptionPln: "Sass to metajęzyk (język opisujący inny język), który ułatwia i przyspiesza pisanie kodu CSS.",
        logo: sassImg
    }
    const figmaData = {
        title: "Figma",
        descriptionEng: "Figma - an application to work with the layout of the future web page",
        descriptionPln: "Figma - aplikacja do pracy z układem przyszłej strony internetowej",
        logo: figmaImg
    }
    const webstormData = {
        title: "WebStorm",
        descriptionEng: "WebStorm is the application I use to write code",
        descriptionPln: "WebStorm to aplikacja, której używam do pisania kodu",
        logo: webstormImg
    }


    return (
        <div className={style.content} theme={props.theme}>
            <span className={style.gradient}></span>
            <article>
                <h2 className="textPreahvihear">My <span className="redText">Skills</span></h2>
            </article>
            <div className={style.skillsContainer}>
                {[htmlData, cssData, jsData, reactData, reduxData, sassData].map((item) => {
                    return (<Skill lang={props.lang} theme={props.theme} {...item}/>)
                })}
            </div>
            <article>
                <p className="textPreahvihear">Applications</p>
            </article>
            <div className={style.appContainer}>
                {[figmaData, webstormData].map((item) => {
                    return (<Skill lang={props.lang} theme={props.theme} {...item}/>)
                })}
            </div>
            <div className={style.skillsBlockImg}>
                <img className={style.logo} src={logoDark} alt=""/>
                <img src={props.theme === "light" ? skillsBlockForLightImg : skillsBlockForDarkImg} alt=""/>
            </div>
            <Footer/>
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
    connect(mapStateToProps, {}),
    withHeader
)
(SkillsPage)
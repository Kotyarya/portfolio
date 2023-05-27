import style from "./HomePage.module.scss";
import arrowImg from "./img/arrow.png";
import homeImg from "./img/homeImg.png";
import eclipseImg from "./img/eclipse.png"
import {connect} from "react-redux";
import Span from "./Span";
import {compose} from "@reduxjs/toolkit";
import withHeader from "../../HOC/withHeader";

const HomePage = (props) => {


    const downloadCV = () => {
        const element = document.createElement("a");
        element.href = "static/media/homeImg.36bf95b5903769323ba9.png";
        element.download = "arrow.png";
        element.click();
    };


    const setText = (textEng, textPln) => props.lang === "eng" ? textEng : textPln

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.content} theme={props.theme}>
                    <div className={style.title}>
                        <img className={setText(style.eclipse, `${style.eclipse} ${style.plnEclipse}`)} src={eclipseImg}
                             alt=""/>
                        <img className={style.arrow} src={arrowImg} alt=""/>
                        <span className={style.radial}></span>
                        <img className={style.homeImg} src={homeImg} alt=""/>
                        <div className={style.text + " textPreahvihear"}>
                            <h1 className={style.hey}>
                                {setText('Hey! I Am ', "Hej! Mam na imię ")}<span
                                className="redText">Maksym</span>
                            </h1>
                            <p className={style.who}>{setText("A Programmer who", "Programista, który")}</p>
                            <h2 className={style.mainText}>{setText("Is always ready to", "Jest zawsze gotowy")}
                                <br/> {setText("learn something ", "nauczyć się czegoś ")} <span
                                    className="redText">{setText("new", "nowego")}</span></h2>
                        </div>
                    </div>
                    <div className={style.descriptionContent + " textPreahvihear"}>
                        <div className={style.description}>
                            <h3 className={style.mainText}>{setText("I am a ", "Jestem ")}<span
                                className="redText">front-end</span> {setText("programmer. ", "programistą ")}
                                <Span/>
                            </h3>
                            <p className={style.text}> {setText("To be more precise, I've been studying this area for ", "Mówiąc dokładniej, studiuję tę dziedzinę od ")}
                                <span
                                    className="redText">{
                                    setText("2 years now", "2 lat")}</span></p>
                        </div>
                        <div className={style.info}>
                            {setText("I am a self-taught front-end programmer. I love this job, so I'm always happy to have any opportunity. I'm a perfectionist from birth, so I can't afford to do my job in a haphazard way.", "Jestem programistą front-endowym samoukiem. Uwielbiam tę pracę, więc zawsze cieszę się na każdą okazję. Jestem perfekcjonistą od urodzenia, więc nie mogę sobie pozwolić na wykonywanie mojej pracy w przypadkowy sposób.")}
                        </div>
                    </div>
                    <button className={style.btn} onClick={downloadCV}>DOWNLOAD CV</button>
                </div>
            </div>
        </>
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
(HomePage)
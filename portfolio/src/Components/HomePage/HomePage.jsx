import style from "./HomePage.module.scss";
import arrowImg from "./img/arrow.png";
import homeImg from "./img/homeImg.png";
import eclipseImg from "./img/eclipse.png"
import Span from "./Span";
import withHeader from "../../HOC/withHeader";

const HomePage = (props) => {
    return (
        <>
            {props.editMode ? <div className={style.menuContainer}>
                <div className={style.menu} theme={props.theme}>
                    <p className="textPreahvihear">Please select the language in which you want to download this CV</p>
                    <div>
                        <button onClick={props.onDownloadCV}>ENG</button>
                        <button onClick={props.onDownloadCV}>PLN</button>
                        <button onClick={props.onDownloadCV}>UKR</button>
                    </div>
                    <button onClick={() => props.setEditMode(false)} className={style.close}>
                    </button>
                </div>
                <div className={style.bg}></div>
            </div> : null}
            <div className={style.wrapper}>
                <div className={style.content} theme={props.theme}>
                    <div className={style.title}>
                        <img className={props.setText(style.eclipse, `${style.eclipse} ${style.plnEclipse}`)}
                             src={eclipseImg}
                             alt=""/>
                        <img className={style.arrow} src={arrowImg} alt=""/>
                        <span className={style.radial}></span>
                        <img className={style.homeImg} src={homeImg} alt=""/>
                        <div className={style.text + " textPreahvihear"}>
                            <h1 className={style.hey}>
                                {props.setText('Hey! I Am ', "Hej! Mam na imię ")}<span
                                className="redText">Maksym</span>
                            </h1>
                            <p className={style.who}>{props.setText("A Programmer who", "Programista, który")}</p>
                            <h2 className={style.mainText}>{props.setText("Is always ready to", "Jest zawsze gotowy")}
                                <br/> {props.setText("learn something ", "nauczyć się czegoś ")} <span
                                    className="redText">{props.setText("new", "nowego")}</span></h2>
                        </div>
                    </div>
                    <div className={style.descriptionContent + " textPreahvihear"}>
                        <div className={style.description}>
                            <h3 className={style.mainText}>{props.setText("I am a ", "Jestem ")}<span
                                className="redText">front-end</span> {props.setText("programmer. ", "programistą ")}
                                <Span count={props.countForSpan}/>
                            </h3>
                            <p className={style.text}> {props.setText("To be more precise, I've been studying this area for ", "Mówiąc dokładniej, studiuję tę dziedzinę od ")}
                                <span
                                    className="redText">{
                                    props.setText("2 years now", "2 lat")}</span></p>
                        </div>
                        <div className={style.info}>
                            {props.setText("I am a self-taught front-end programmer. I love this job, so I'm always happy to have any opportunity. I'm a perfectionist from birth, so I can't afford to do my job in a haphazard way.", "Jestem programistą front-endowym samoukiem. Uwielbiam tę pracę, więc zawsze cieszę się na każdą okazję. Jestem perfekcjonistą od urodzenia, więc nie mogę sobie pozwolić na wykonywanie mojej pracy w przypadkowy sposób.")}
                        </div>
                    </div>
                    <button className={style.btn} onClick={() => props.setEditMode(true)}>DOWNLOAD CV</button>
                </div>
            </div>
        </>
    )
}


export default withHeader(HomePage)
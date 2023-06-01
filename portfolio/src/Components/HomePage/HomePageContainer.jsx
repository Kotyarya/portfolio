import HomePage from "./HomePage";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const HomePageContainer = () => {

    const downloadCV = () => {
        const element = document.createElement("a");
        element.href = "static/media/homeImg.36bf95b5903769323ba9.png";
        element.download = "arrow.png";
        element.click();
    };
    const setText = (textEng, textPln) => lang === "eng" ? textEng : textPln

    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)
    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count <= 10 ? count + 1 : 0))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <HomePage countForSpan={count} setText={setText} theme={theme} lang={lang}
                     onDownloadCV={downloadCV}/>
}

export default HomePageContainer
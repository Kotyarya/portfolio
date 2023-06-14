import HomePage from "./HomePage";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import CVEnd from "../../assets/CV/CVEng.pdf"
import CVPln from "../../assets/CV/CV Pln.pdf"
import CVPUkr from "../../assets/CV/CV Ukr.pdf"

const HomePageContainer = () => {

    const downloadCV = (e) => {
        const element = document.createElement("a");
        switch (e.target.innerText) {
            case "ENG":
                element.href = CVEnd;
                element.download = "Maksym Aksamitniy.pdf";
                element.click();
                setEditMode(false)
                break
            case "PLN":
                element.href = CVPln;
                element.download = "Maksym Aksamitniy.pdf";
                element.click();
                setEditMode(false)
                break
            case "UKR":
                element.href = CVPUkr;
                element.download = "Maksym Aksamitniy.pdf";
                element.click();
                setEditMode(false)
                break
            default :
                return;
        }
    };
    const setText = (textEng, textPln) => lang === "eng" ? textEng : textPln

    const [editMode, setEditMode] = useState(false)

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

    return <HomePage editMode={editMode} setEditMode={setEditMode} countForSpan={count} setText={setText} theme={theme}
                     lang={lang}
                     onDownloadCV={downloadCV}/>
}

export default HomePageContainer
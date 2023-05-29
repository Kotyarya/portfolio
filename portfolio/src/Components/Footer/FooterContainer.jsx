import Footer from "./Footer";
import {useSelector} from "react-redux";

const FooterContainer = (props) => {

    const goTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const theme = useSelector(state => state.themeState.theme)
    const lang = useSelector(state => state.langState.lang)
    return (
        <Footer theme={theme} lang={lang} goTop={goTop}/>
    )
}

export default FooterContainer
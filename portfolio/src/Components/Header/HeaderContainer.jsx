import Header from "./Header";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../Redux/Other/Actions";

const HeaderContainer = () => {
    const [editMode, toggleEditMode] = useState(false)
    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)
    const dispatch = useDispatch()

    const setLanguage = (lang) => {
        dispatch(allActions.langActions(lang))
    }
    const setTheme = () => {
        dispatch(allActions.themeActions())
    }
    return (
        <Header setTheme={setTheme} setLanguage={setLanguage} theme={theme} lang={lang} editMode={editMode}
                toggleEditMode={toggleEditMode}/>
    )
}

export default HeaderContainer
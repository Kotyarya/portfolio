import Header from "./Header";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux1/Other/Actions";

const HeaderContainer = () => {
    const [editMode, toggleEditMode] = useState(false)
    const theme = useSelector(state => state.themeReducer.theme)
    const lang = useSelector(state => state.langReducer.lang)
    const dispatch = useDispatch()


    const setLanguage = () => {
        dispatch(allActions.langActions())
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
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePageContainer from "./Components/HomePage/HomePageContainer";
import {useSelector} from "react-redux";
import SkillsPageContainer from "./Components/SkillsPage/SkillsPageContainer";
import LabContainer from "./Components/Lab/LabContainer";
import ContactPageContainer from "./Components/ContactPage/ContactPageContainer";
import NotFoundPageContainer from "./Components/NotFoundPage/NotFoundPageContainer";

const App = (props) => {
    return (
        <div className={"app"} theme={props.theme}>
            <Routes>
                <Route path="/" element={<HomePageContainer/>}/>
                <Route path="/skills" element={<SkillsPageContainer/>}/>
                <Route path="/lab" element={<LabContainer/>}/>
                <Route path="/contact" element={<ContactPageContainer/>}/>
                <Route path="*" element={<NotFoundPageContainer/>}/>
            </Routes>
        </div>
    );
}

const AppContainer = () => {

    const theme = useSelector(state => state.themeReducer.theme)
    return (
        <App theme={theme}/>
    )
}

export default AppContainer;

import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePageContainer from "./Components/HomePage/HomePageContainer";
import {useSelector} from "react-redux";
import SkillsPageContainer from "./Components/SkillsPage/SkillsPageContainer";
import ContactPageContainer from "./Components/ContactPage/ContactPageContainer";
import LabContainer from "./Components/Lab/LabContainer";

const App = (props) => {
    return (
        <div className={"app"} theme={props.theme}>
            <Routes>
                <Route path="/" element={<HomePageContainer/>}/>
                <Route path="/skills" element={<SkillsPageContainer/>}/>
                <Route path="/lab" element={<LabContainer/>}/>
                <Route path="/contact" element={<ContactPageContainer/>}/>
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

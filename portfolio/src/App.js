import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {

    return (
        <div className={"app"} theme={props.theme}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/skills" element={<SkillsPage/>}/>
                <Route path="/lab" element={<HeaderContainer/>}/>
            </Routes>
        </div>
    );
}


export default App;

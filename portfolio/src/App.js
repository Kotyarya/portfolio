import './App.css';
import {connect} from "react-redux";
import HomePage from "./Components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import SkillsPage from "./Components/SkillsPage/SkillsPage";

function App(props) {

    return (
        <div className={"app"} theme={props.theme}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/skills" element={<SkillsPage/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.themeState.theme
    }
}

export default connect(mapStateToProps)(App);

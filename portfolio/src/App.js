import './App.css';
import {connect} from "react-redux";
import HomePage from "./Components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className={"app"} theme={props.theme}>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
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

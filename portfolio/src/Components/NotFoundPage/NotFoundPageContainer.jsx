import React from 'react';
import {useSelector} from "react-redux";
import NotFoundPage from "./NotFoundPage";
import withHeader from "../../HOC/withHeader";

const NotFoundPageContainer = () => {
    const theme = useSelector(state => state.themeReducer.theme)

    return <NotFoundPage theme={theme}/>
};

export default withHeader(NotFoundPageContainer);
import React from 'react';
import style from "./NotFoundPage.module.scss"

const NotFoundPage = (props) => {
    return (
        <div className={style.block} theme={props.theme}>
            <article className="textPreahvihear">
                <h2>Page <span className="redText">Not found</span></h2>
            </article>
        </div>
    );
};

export default NotFoundPage;
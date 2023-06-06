import style from "./Lab.module.scss"

const Lab = (props) => {
    return (
        <div className={style.wrapper}>
            <article className="textPreahvihear">
                <h2>My <span className="redText">project</span></h2>
            </article>
            <div className={style.content}>
                <div className={style.block}>
                    <div className={style.info}>
                        <article>
                            <p></p>
                        </article>
                    </div>
                    <div className={style.img}></div>
                </div>
            </div>
        </div>
    )
}

export default Lab
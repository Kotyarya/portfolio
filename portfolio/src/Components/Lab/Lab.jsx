import style from "./Lab.module.scss"

const Lab = (props) => {
    return (
        <div className={style.wrapper} theme={props.theme}>
            <article className="textPreahvihear">
                <h2>Under <span className="redText">development</span></h2>
            </article>
            <div className={style.content}>
                {/*{*/}
                {/*    props.project.map((project) => {*/}
                {/*        return (*/}
                {/*            <div className={style.block} rotation={project.rotation}>*/}
                {/*                <div className={style.info}>*/}
                {/*                    <article className="textPoppins600">*/}
                {/*                        <p>Featured Project</p>*/}
                {/*                        <h3>{project.title}</h3>*/}
                {/*                    </article>*/}
                {/*                    <div className={style.description + " textPoppins500"}>*/}
                {/*                        {props.lang === "eng" ? project.descriptionENG : project.descriptionPLN}*/}
                {/*                    </div>*/}
                {/*                    <div className={style.icons}>*/}
                {/*                        {project.tech.map((tech) => {*/}
                {/*                            return <img src={tech} alt=""/>*/}
                {/*                        })}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={style.img}>*/}
                {/*                    <img onClick={() => {*/}
                {/*                        props.navigate(project.location)*/}
                {/*                    }} src={project.img} alt="" className={style.imgProject}></img>*/}
                {/*                </div>*/}
                {/*                <div className={style.gradient}></div>*/}
                {/*                <div className={style.gradient}></div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default Lab
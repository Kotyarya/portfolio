import style from "./ContactPage.module.scss"
import ContactForm from "./ContactForm/ContactForm";
import {links} from "../../Redux/Other/data";
import {nanoid} from "nanoid";
import loader from "./img/03-16-39-160_512.webp"

const ContactPage = (props) => {

    return (
        <>
            {props.isFetching ? <div className={style.isFetchingBlock}>
                <img src={loader} alt=""/>
            </div> : null}
            <div className={style.container + " textPreahvihear"} theme={props.theme}>
                <div className={style.content}>
                    <article>
                        <h2>Contact <span className="redText">me</span></h2>
                    </article>
                    <ContactForm onSubmit={props.submit} theme={props.theme}/>
                </div>
                <div className={style.links}>
                    {links.map((item) => {
                        return (
                            <button key={nanoid(10)} className="textPreahvihear">
                                <img src={item.logo} alt=""/>
                                <a target={"_blank"} rel={"noreferrer"} href={item.href}
                                   style={item.title === "GitHub" ?
                                       props.theme === "dark" ?
                                           {color: item.color}
                                           : {color: "black"}
                                       : {color: item.color}}>{item.title}</a>
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default ContactPage
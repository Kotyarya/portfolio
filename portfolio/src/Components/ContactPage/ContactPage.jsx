import style from "./ContactPage.module.scss"
import ContactForm from "./ContactForm/ContactForm";
import {links} from "../../Redux/Other/data";

const ContactPage = (props) => {

    return (
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
                        <button className="textPreahvihear">
                            <img src={item.logo} alt=""/>
                            <a href={item.href}
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
    )
}


export default ContactPage
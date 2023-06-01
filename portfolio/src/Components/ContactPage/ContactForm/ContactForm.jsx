import {Field, reduxForm} from "redux-form";
import style from "./ContactForm.module.scss"

const ContactForm = props => {
    return (
        <form className={style.form + " textPreahvihear"} onSubmit={props.handleSubmit} theme={props.theme}>
            <div>
                <Field className={style.name + " textPreahvihear"} placeholder="Name" name="name" component="input"
                       type="text"/>
            </div>
            <div>
                <Field className={style.email + " textPreahvihear"} placeholder={"Email"} name="email" component="input"
                       type="email"/>
            </div>
            <div>
                <Field className={style.message + " textPreahvihear"} placeholder="Message" name="message"
                       component="textarea" type="text"/>
            </div>
            <button className={style.submit + " textPreahvihear"} type="submit">Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'contact'
})(ContactForm)

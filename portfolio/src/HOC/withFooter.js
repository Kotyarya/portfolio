import FooterContainer from "../Components/Footer/FooterContainer";

const withFooter = (Component) => {
    return (props) => {
        return (
            <>
                <Component {...props}/>
                <FooterContainer {...props}/>
            </>
        )
    }
}

export default withFooter
import HeaderContainer from "../Components/Header/HeaderContainer";

const withHeader = (Component) => {
    return (props) => {
        return (
            <>
                <HeaderContainer {...props}/>
                <Component {...props}/>
            </>
        )
    }
}

export default withHeader
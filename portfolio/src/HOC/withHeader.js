import Header from "../Components/Header/Header";

const withHeader = (Component) => {
    return (props) => {
        return (
            <>
                <Header {...props}/>
                <Component {...props}/>
            </>
        )
    }
}

export default withHeader
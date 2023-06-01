const Span = (props) => {
    return <span>{props.count % 2 === 0 ? "" : "|"}</span>
}

export default Span
import {useEffect, useState} from "react";

const Span = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count <= 10 ? count + 1 : 0))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return <span>{count % 2 === 0 ? "" : "|"}</span>
}

export default Span
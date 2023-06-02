import {useState} from "react";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)



    return <>
        Hello, {counter}
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
    </>
}
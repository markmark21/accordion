import {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only 1st render');
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect 1st render and every counter change');
        document.title = counter.toString()
    }, [counter])



    return <>
        Hello, {counter} {fake}
        <button onClick={() => {setCounter(counter + 1)}}>counter+</button>
        <button onClick={() => {setFake(fake + 1)}}>fake+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render');
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])




    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => {setCounter(counter + 1)}}>counter+</button>
        <button onClick={() => {setFake(fake + 1)}}>fake+</button>*/}
    </>
}
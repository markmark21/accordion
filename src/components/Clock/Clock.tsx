import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const {} = props

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {setDate(new Date())}, 1000)
    }, [])

    const secondsString = date.getSeconds() < 10 ? `${0}` + date.getSeconds() : date.getSeconds()

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{secondsString}</span>
    </div>
}

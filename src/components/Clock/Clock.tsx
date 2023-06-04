import React, {useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const {} = props

    const [date, setDate] = useState(new Date())
    return <div>
        <span></span>
        :
        <span></span>
        :
        <span></span>
    </div>
}

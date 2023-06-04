import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";

type PropsType = {}
const get0String = (num: number) => num < 10 ? `${0}` + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const {} = props;

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div>
        <span>{get0String(date.getHours())}</span>
        :
        <span>{get0String(date.getMinutes())}</span>
        :
        <span>{get0String(date.getSeconds())}</span>
    </div>;
};

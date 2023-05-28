import React, {useMemo, useState} from "react";

export default {
    title: "useMemo"
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;

        }
        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>;
};
const UsersSecret = (props: { users: string[] }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>;
};

const Users = React.memo(UsersSecret);

export const HelpForReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Mark", "Valera", "Artem", "Dimych"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>+
            </button>
            {counter}
            <Users users={newArray}/>
        </div>
    );

};



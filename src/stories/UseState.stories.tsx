import React, {useState} from "react";

export default {
    title: "useState.memo demo",
};

function generateData() {
       return 1
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => {setCounter( changer)}}>+</button>
            {counter}
        </div>
    );

};
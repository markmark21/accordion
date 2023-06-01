import React, {useState} from "react";

export default {
    title: "useState.memo demo",
};

function generateData() {
       return 3298723987
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);


    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
        </div>
    );

};
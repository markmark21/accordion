import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: "input"
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }}/> - {value}</>;
};
export const GetValueOfUncontrolledInputByButtonPress = () => {

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };

    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>;
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return <input value={parentValue} onChange={onChange}/>;
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>;
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return <select value={parentValue} onChange={onChange}>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

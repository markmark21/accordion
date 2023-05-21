import React, {useState} from "react";


export function UncontrolledRating() {
    console.log("Rating rendering");

    let [value, setValue] = useState(3);

    return (
        <div>
            <Star selected={value > 0} setValue={()=> {setValue(1)}} />
            <Star selected={value > 1} setValue={()=> {setValue(2)}}/>
            <Star selected={value > 2} setValue={()=> {setValue(3)}}/>
            <Star selected={value > 3} setValue={()=> {setValue(4)}}/>
            <Star selected={value > 4} setValue={()=> {setValue(5)}}/>

        </div>
    );


}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export const Star: React.FC<StarPropsType> = (props) => {
    const {selected, setValue} = props
    console.log("Star rendering");
    return <span onClick={() => {
        setValue();
    }}>
        {selected ? <b>start </b> : " star"}
    </span>;
}
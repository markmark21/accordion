import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingValueType) => void
}


export const Rating: React.FC<RatingPropsType> = (props) => {
    const {onClick, value} = props
    console.log("Rating rendering");
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>

        </div>
    );
}


type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void;
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log("Star rendering");

    return <span onClick={()=> {props.onClick(props.value)}}>
        {props.selected ? <b style={{cursor: "pointer"}}>star </b> : " star"}
    </span>;

}
import React, {useReducer} from "react";
import {reducer} from "./reducer";


export const UncontrolledAccordion: React.FC<AccordionPropsType> = (props) => {
    const {titleValue} = props;

    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});


    return (
        <div>
            {/*<AccordionTitle title={titleValue} onClick={() => {  setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={titleValue} onClick={() => {
                dispatch({type: "TOGGLE-COLLAPSED"});
            }}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    );

};

export type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = (props) => {
    const {title, onClick} = props;
    return <div>
        <h3 onClick={() => {
            onClick();
        }}>{title}</h3>
    </div>;


};

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

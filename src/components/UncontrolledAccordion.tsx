import React, {useState} from "react";


export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/> }
        </div>
    );

};

export type AccordionPropsType = {
    titleValue: string
    /*collapsed: boolean*/

}


function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {/*{!props.collapsed && <AccordionBody/>}*/}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3>{props.title}</h3>
    </div>;


}

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
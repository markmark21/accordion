import React, {useState} from "react";


export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>

            {!collapsed && <AccordionBody/> }
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

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick={()=> { props.onClick() }}>{props.title}</h3>
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

import React, {useState} from "react";


export const UncontrolledAccordion: React.FC<AccordionPropsType> = (props) => {
    const {titleValue} = props
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => {setCollapsed(!collapsed)}}/>

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

const AccordionTitle: React.FC<AccordionTitlePropsType> = (props) => {
    const {title, onClick} = props
    return <div>
        <h3 onClick={()=> {onClick() }}>{title}</h3>
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

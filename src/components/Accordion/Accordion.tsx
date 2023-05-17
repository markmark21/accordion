import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void;

}


const Accordion: React.FC<AccordionPropsType> = (props) => {
    const {onChange, collapsed, titleValue} = props
    return (
        <div>
            <AccordionTitle title={titleValue}
                            onChange={onChange}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange: () => void;
}

const AccordionTitle: React.FC<AccordionTitlePropsType> =(props) => {
    const {onChange, title} = props
    return <div>
        <h3 onClick={onChange}>{title}</h3>
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

export default Accordion;
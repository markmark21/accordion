import React from "react";

export type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void;
    items: ItemType[]
    onClick: (value: any) => void;

}


const Accordion: React.FC<AccordionPropsType> = (props) => {
    const {onChange, collapsed, titleValue, items, onClick} = props;
    return (
        <div>
            <AccordionTitle title={titleValue}
                            onChange={onChange}
            />
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange: () => void;
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = (props) => {
    const {onChange, title} = props;
    return <div>
        <h3 style={{cursor: "pointer"}} onClick={() => onChange()}>{title}</h3>
    </div>;


};

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void;
}

const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {
    const {items, onClick} = props;
    return <ul>
        {items.map((item, index) => (
                <li key={index} onClick={() => {onClick(item.value)}}>{item.title}</li>
        ))}
    </ul>;


};

export default Accordion;
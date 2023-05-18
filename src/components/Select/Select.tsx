import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css";

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const {value, items, onChange} = props;
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(value);

    useEffect(() => {
        setHoveredElementValue(value);
    },[value])


    const selectedItem = items.find(i => i.value === value);
    const hoveredItem = items.find(i => i.value === hoveredElementValue);
    const changeVisibility = () => {
        setActive(!active);
    };
    const onItemClick = (value: any) => {
        onChange(value);
        changeVisibility();
    };
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretenderElementIndex = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretenderElementIndex) {
                        onChange(pretenderElementIndex.value);
                        return;
                    }
                }
            }
            onChange(items[0].value)
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    };


    return (
        <div>
            <div tabIndex={0} className={s.select} onKeyDown={onKeyDown}>
                <span className={s.main} onClick={changeVisibility}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {items.map(item => <div
                            onMouseOver={() => {
                                setHoveredElementValue(item.value);
                            }}
                            className={s.item + " " + (hoveredItem === item ? s.selected : " ")}
                            key={item.value}
                            onClick={() => {
                                onItemClick(item.value);
                            }}
                        >{item.title
                        }</div>)}
                    </div>
                }
            </div>
        </div>
    );
};


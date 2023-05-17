import {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: "Accordion",
    component: Accordion
};

const callBack = action("accordion mode change fired");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callBack}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>

}
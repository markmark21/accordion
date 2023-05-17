import {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: "Accordion",
    component: Accordion
};

const callBack = action("accordion mode change fired");
const onClickCallBack = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack} items={[]} onClick={onClickCallBack}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     onChange={callBack}
                                                     items={[
                                                         {title: "Mark", value: 1},
                                                         {title: "Alexey", value: 2},
                                                         {title: "Valera", value: 3},
                                                         {title: "Artem", value: 4}]}
                                                     onClick={onClickCallBack}
/>;

export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Mark", value: 1},
                          {title: "Alexey", value: 2},
                          {title: "Valera", value: 3},
                          {title: "Artem", value: 4}
                      ]}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)}}
    />;

};
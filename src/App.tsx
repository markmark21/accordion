import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <div>{props.title}</div>
}


export default App;

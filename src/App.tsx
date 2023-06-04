import React, {useState} from "react";
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Clock} from "./components/Clock/Clock";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            {/*<UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating />
            <OnOff />*/}
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
            <UncontrolledRating/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            <Clock/>
        </div>
    );
}
export default App;


import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/JournallyLogoTransparent.png"
import SituationChecklist from "../components/SituationChecklist";
import { useState } from "react"


export default function Extra(props) {

    const [situation, setSituation]=useState();

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>Is there something else on your mind?</h2>
            <p>Select one.</p>
            <SituationChecklist situation={setSituation} />
            <button id="extrasButton">Next</button>
            <Footer/>
        </div>
    )
}






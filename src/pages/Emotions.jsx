import Header from "../components/Header"
import logo from "../images/JournallyLogo.png"
import MoodChecklist from "../components/MoodChecklist"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function Emotions(props) {

    const [mood, setMood]=useState();

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>How are you feeling?</h2>
            <p>Select one.</p>
            <MoodChecklist mood={setMood}/>
            <button id="emotionsButton">Next</button>
        </div>
    )
}

import Header from "../components/Header"
import logo from "../images/JournallyLogo.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";


export default function Emotions(props) {

    const [promptList, setPrompts]=useState();

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>promptList[0]</h2>
            <JournalPage />
            <button className="promptButton">Send my writing to sea!</button>
            <h2>promptList[1]</h2>
            <JournalPage />
            <button className="promptButton">Send my writing to sea!</button>

            <h2>promptList[2]</h2>
            <JournalPage />
            <button className="promptButton">Send my writing to sea!</button>

        </div>
    )
}


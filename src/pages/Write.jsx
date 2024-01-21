
import Header from "../components/Header"
import Footer from "../components/Footer"
import PromptTypes from "./PromptType"

import logo from "../images/JournallyLogo.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";
import { useNavigate } from 'react-router-dom';



export default function Write(props) {
    let [prompt, setPrompt] = useState("TEST");

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>{prompt}</h2>
            <JournalPage />
            <button className="promptButton">Send my writing to sea!</button>
            <Footer/>

        </div>
    )
}


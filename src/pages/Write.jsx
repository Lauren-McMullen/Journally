
import Header from "../components/Header"
import Footer from "../components/Footer"
import PromptTypes from "./PromptType"
import selectPrompts from "../logic.js"


import logo from "../images/JournallyLogoTransparent.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom"



export default function Write(props) {
    const {state} = useLocation();
    console.log("PROMPT TYPE: " + JSON.stringify(state.promptType))
    console.log("STATE: " + JSON.stringify(state))
    console.log("MOOD: " + JSON.stringify(state.state.mood))
    let prompt = selectPrompts(state.promptType, state.state.mood);
    console.log(prompt);

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


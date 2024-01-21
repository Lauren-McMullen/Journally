
import Header from "../components/Header"
import Footer from "../components/Footer"
import PromptTypes from "./PromptType"
import selectPrompts from "./Logic.js"


import logo from "../images/logo.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';




export default function Write(props) {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [response, setResponse]=useState("");
    let prompt = selectPrompts(state.promptType, state.state.mood);
    

    return (
        <div className="master-div ">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div>
                <h2 className="promptTitle">Here's your prompt:</h2>
            </div>
            <div className="text-div">
                <div className="writingArea">
                    <h3>{prompt}</h3>
                <JournalPage response={setResponse} />
                <button className="button" id="big-butt" onClick={() =>navigate("\sendoff")}>Send my writing away!</button></div>
                <Footer/>
            </div>

        </div>
    )
}


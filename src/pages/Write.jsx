
import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/JournallyLogo.png"
import { useState } from "react"
import JournalPage from "../components/JournalPage";
import { useNavigate } from 'react-router-dom';
import promptTypes from "./PromptType";



export default function Write(props) {

    

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>{promptTypes}</h2>
            <JournalPage />
            <button className="promptButton">Send my writing to sea!</button>
            <Footer/>

        </div>
    )
}


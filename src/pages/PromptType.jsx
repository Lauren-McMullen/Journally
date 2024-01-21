import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../images/logo.png"
import pinkBook from "../images/pinkBook.png"
import envelope from "../images/Envelope.png"
import paintbrush from "../images/Paintbrush.png"

import PromptList from "../components/PromptList"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom"





export default function promptTypes(props) {

    const {state} = useLocation();
    //console.log("PT:" + JSON.stringify(state));
    
    const [promptType, setpromptType]=useState();
    
    const navigate = useNavigate();
    

    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div className="emotionsTitle">
                <h2 className="promptTitle">Pick your prompt type:</h2>
            </div>
            <div className="bookContainer">
                <div className="book">
                    <img src={pinkBook} alt="picture of a pink book"/>
                </div>
                <div className="paint">
                    <img src={paintbrush} alt="picture of a paintbrush"/>
                </div>
                <div className="envelope">
                    <img src={envelope} alt="picture of an envelope"/>
                </div>
            </div>
            <div className="text-div">
                <h3>Journal Prompts</h3>
                <p>Journal prompts will ask you to write reflectively, like you might in a diary entry. 
                </p>
                <h3>Creative Prompts</h3>
                <p>
                    Creative prompts will provide you with a creative writing exercise that will help you engage with you emotions in a creative way.
                </p>
                <h3>Letter Prompts</h3>
                <p>
                    Letter prompts will ask you to write a letter to yourself or someone else.
                </p>
                <PromptList promptType={setpromptType}/>
                <button className="button" onClick={()=>navigate("/write", {state: {promptType, state}})}>Next</button>
                <Footer/>
            </div>

        </div>
    )
}






import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../images/logo.png"
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
        <div>
            <Header logo={logo} name={props.name}/>
            <h2 className="promptTitle">Pick the type of prompts you want:</h2>
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
    )
}






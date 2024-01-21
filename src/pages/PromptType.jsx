import Header from "../components/Header"
import logo from "../images/JournallyLogo.png"
import PromptList from "../components/PromptList"
import { useState } from "react"





export default function PromptTypes(props) {

    const [promptType, setpromptType]=useState();

    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h2>Pick the type of prompts you want:</h2>
            <p>Journal prompts will ask you to write reflectively, like you might in a diary entry.
                Creative prompts will provide you with a creative writing exercise that will help you engage with you emotions in a creative way.
                Letter prompts will ask you to write a letter to yourself or someone else.
            </p>
            <PromptList promptType={setpromptType}/>
            <button id="promptButton">Next</button>

        </div>
    )
}





import Header from "../components/Header"
import logo from "../images/logo.png"
import Footer from "../components/Footer"
import MoodChecklist from "../components/MoodChecklist"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function Emotions(props) {
    const [mood, setMood]=useState("");
    const navigate = useNavigate();
    //console.log("EMOTIONS:"+ mood);

    
    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div>
                <h2 className="emotionsTitle">How are you feeling?</h2>
            </div>
            <div className="text-div">
                <MoodChecklist id="emotionradio" mood={setMood}/>
                <button className="button" onClick={() => navigate("/prompttype", {state:{mood}})}>Next</button>
                <Footer/>
            </div>
        </div>
    )
}
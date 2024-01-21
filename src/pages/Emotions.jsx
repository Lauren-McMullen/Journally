import Header from "../components/Header"
import logo from "../images/logo.png"
import HappyLady from "../images/HappyLady.png"
import SadLady from "../images/SadLady.png"
import Footer from "../components/Footer"
import MoodChecklist from "../components/MoodChecklist"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function Emotions(props) {
    const [mood, setMood]=useState("");
    const navigate = useNavigate();

    
    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div>
                <h2 className="emotionsTitle">How are you feeling?</h2>
            </div>
            <div className="text-div">
                <div className="MiddleRow">
                    <MoodChecklist id="emotionradio" mood={setMood}/>
                    <div  clasName="twoFaces">
                        <div className="faces"><img src={HappyLady} alt="Happy woman"/></div>
                        <div className="faces"><img src={SadLady} alt="Happy woman"/></div>
                    </div>
                </div>
                <button className="button" onClick={() => navigate("/prompttype", {state:{mood}})}>Next</button>
                <Footer/>
            </div>
        </div>
    )
}
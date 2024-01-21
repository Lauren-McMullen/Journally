import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/logo.png"
import yBlob from "../images/Yellow-Blob.png"
import RGirl from "../images/RainbowGirl.png"
import { useNavigate } from "react-router-dom";
import "./style.css"


export default function Welcome(props) {
    const navigate = useNavigate();
    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            <div className="yBlob">
                    <img src={yBlob} alt="Girl sitting under a rainbow"/>
            </div>
            </div>
            
            <div>
                <h1 className="hello">Welcome to Journally</h1>
            </div>
            <div className="text-div">
                <div className="frontgraphic">
                    <p className="text">Reflective journal writing is an effective way to engage with your emotions with intentionality. The Journally app gives you a cathartic, tailored journaling 
                    prompts based on your current emotions without the hassle of carrying a notebook or making a large time commitment. Tell Journally how you are feeling and the type of writing you want to do, and you will recieve a prompt to respond to. When you are done, set your thoughts free and watch them drift away!</p>
                    <img src={RGirl} alt="Girl sitting under a rainbow"/>
                </div>        
                <button className="button" onClick={() => navigate("/emotions")}>Get Started</button>
                <Footer/>
            </div>
        </div>    
    )
}







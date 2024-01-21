import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import "./style.css"


export default function Welcome(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="header"><Header logo={logo} /></div>
            <h1 className="hello">Welcome to Journally</h1>
            <p className="text">Journalling is a cathartic experience. Journally gives you tailored journalling 
            prompts based on your current emotions and life challenges. When you are done getting your emotions out, set your thoughts free and watch them drift away!</p>
            <button id="startButton" onClick={() => navigate("/emotions")}>Get Started</button>
            <Footer/>

        </div>
    )
}







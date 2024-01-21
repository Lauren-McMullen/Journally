import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import "./style.css"


export default function Welcome(props) {
    const navigate = useNavigate();
    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div>
                <h1 className="hello">Welcome to Journally</h1>
            </div>
            <div className="text-div">
                <p className="text">Journalling is a cathartic experience. Journally gives you tailored journalling 
                prompts based on your current emotions and life challenges. When you are done getting your emotions out, set your thoughts free and watch them drift away!</p>            
                <button className="button" onClick={() => navigate("/emotions")}>Get Started</button>
                <Footer/>
            </div>
        </div>    
    )
}







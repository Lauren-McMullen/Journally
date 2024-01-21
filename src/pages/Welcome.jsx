import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../images/JournallyLogo.png"
import { useNavigate } from "react-router-dom";



export default function Welcome(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h1>Welcome to Journally</h1>
            <p>Journalling is a cathartic experience. Journally gives you tailored journalling 
            prompts based on your current emotions and life challenges. When you are done getting your emotions out, set your thoughts free and watch them drift away!</p>
            <button id="startButton" onClick={() => navigate("/emotions")}>Get Started</button>
            <Footer/>

        </div>
    )
}







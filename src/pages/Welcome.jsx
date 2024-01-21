import Header from "../components/Header"
import logo from "../images/JournallyLogo.png"


export default function Welcome(props) {
    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <h1>Welcome to Journally</h1>
            <p>Journalling is a cathartic experience. Journally gives you tailored journalling 
            prompts based on your current emotions and life challenges. When you are done getting your emotions out, set your thoughts free and watch them drift away!</p>
            <button id="startButton">Get Started</button>
        </div>
    )
}







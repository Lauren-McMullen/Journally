import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import logo from "../images/logo.png"
import SendoffGif from "../components/SendoffGif";


export default function Sendoff(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Header logo={logo} name={props.name}/>
            <SendoffGif/>
            <button id="snedoffButton" onClick={() => navigate("/welcome")}>Get more Journally</button>
        </div>
    )
}

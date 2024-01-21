import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import logo from "../images/logo.png"
import SendoffGif from "../components/SendoffGif";


export default function Sendoff(props) {
    const navigate = useNavigate();
    return (
        <div className="master-div">
            <div className="logo-div">
                <Header logo={logo} />
            </div>
            <div className="text-div">
                <div className="pic-div">
                <SendoffGif/>
                </div>
                <div className="final-butt">
                <button className="button" onClick={() => navigate("/welcome")}>Get more Journally</button>
                </div>
            </div>
        </div>
    )
}

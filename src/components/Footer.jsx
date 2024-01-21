
import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <button id="homeButton" onClick={() => navigate("/welcome")}>Home</button>
        </div>
    );
};
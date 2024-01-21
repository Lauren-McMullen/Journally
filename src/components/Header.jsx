

export default function Header(props) {
    return (
        <div className="header">
            <img src={props.logo} alt="Quill in Ink"/>
            <h1>Welcome to {props.name}!</h1>
        </div>
    );
};

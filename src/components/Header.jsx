

export default function Header(props) {
    return (
        <div className="header">
            <img src={props.logo} alt="JournallyLogo"/>
            <h1>{props.name}</h1>
        </div>
    );
};

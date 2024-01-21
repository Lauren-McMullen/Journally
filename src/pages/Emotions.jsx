

export default function Emotions(name) {
    return (
        <div>
            <Header logo={logo} name={name}/>
            <h2>How are you feeling?</h2>
            <p>Select one.</p>
            <MoodChecklist mood={setMood}/>
            <button id="emotionsButton">Next</button>
        </div>
    )
}



export default function Extra(name) {
    return (
        <div>
            <Header logo={logo} name={name}/>
            <h2>Is there something else on your mind?</h2>
            <p>Select one.</p>
            <SituationChecklist situation={setSituation} />
            <button id="extrasButton">Next</button>
        </div>
    )
}






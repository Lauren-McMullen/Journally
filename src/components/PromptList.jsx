export default function PromptList(props) {
    return (
        <div className="PromptList">
            <label>Journal Prompts</label>
            <input type="radio" name="mood" label="Sad" value="Sad" onChange={e=>props.mood(e.target.value)} />
            <label>Creative Prompts</label>
            <input type="radio" name="mood" label="Angry" value="Angry" onChange={e=>props.mood(e.target.value)} />
            <label>Letter Prompts</label>
            <input type="radio" name="mood" label="Anxious" value="Anxious" onChange={e=>props.mood(e.target.value)} />
        </div>
    );
};




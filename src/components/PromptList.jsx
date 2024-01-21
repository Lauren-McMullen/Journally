export default function PromptList(props) {
    return (
        <div className="PromptList">
            <label>Journal Prompts</label>
            <input type="radio" name="mood" value="Journal Prompts" onChange={e=>props.promptType(e.target.value)} />
            <label>Creative Prompts</label>
            <input type="radio" name="mood" value="Creative Prompts" onChange={e=>props.promptType(e.target.value)} />
            <label>Letter Prompts</label>
            <input type="radio" name="mood" value="Letter Prompts" onChange={e=>props.promptType(e.target.value)} />
        </div>
    );
};




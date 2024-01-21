
export default function PromptList(props) {
    return (
        <div className="PromptList">
            <label className="radioLabel">Journal Prompts</label>
            <input type="radio" name="promptType" value="Journal Prompt" onChange={e=>props.promptType(e.target.value)} />
            <label className="radioLabel">Creative Prompts</label>
            <input type="radio" name="promptType" value="Creative Prompt" onChange={e=>props.promptType(e.target.value)} />
            <label className="radioLabel">Letter Prompts</label>
            <input type="radio" name="promptType" value="Letter Prompt" onChange={e=>props.promptType(e.target.value)} />
        </div>
    );
};




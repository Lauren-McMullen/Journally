import "../Options"

export default function PromptList(props) {
    return (
        <div className="PromptList">
            <label>Journal Prompts</label>
            <input type="radio" name="promptType" value={JOURNAL_PROMPT} onChange={e=>props.promptType(e.target.value)} />
            <label>Creative Prompts</label>
            <input type="radio" name="promptType" value={CREATIVE_PROMPT} onChange={e=>props.promptType(e.target.value)} />
            <label>Letter Prompts</label>
            <input type="radio" name="promptType" value={LETTER_PROMPT} onChange={e=>props.promptType(e.target.value)} />
        </div>
    );
};




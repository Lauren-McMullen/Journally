
export default function MoodChecklist(props) {
    return (
        <div className="MoodChecklist">
            <label>
                <input type="Checkbox" />
                <span>{props.sad}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.angry}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.happy}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.anxious}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.stressed}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.jealous}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.bored}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.confused}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.ashamed}</span>
            </label>
            
        </div>
    );
};



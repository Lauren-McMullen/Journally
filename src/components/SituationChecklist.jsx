
export default function SituationChecklist(props) {
    return (
        <div className="MoodChecklist">
            <label>
                <input type="Checkbox" />
                <span>{props.health}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.schoolwork}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.family}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.finances}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.relationship}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.bodyimage}</span>
            </label>
            
        </div>
    );
};




export default function MoodChecklist(props) {
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="Checkbox" />
                <span>{props.sad}</span>
            </label>
            <label>
                <input type="Checkbox" />
                <span>{props.mad}</span>
            </label>
        </div>
    );
};



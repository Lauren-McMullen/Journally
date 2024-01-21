
export default function SituationChecklist(props) {
    return (
       <div className="SituationChecklist">
            <label>School/Work</label>
            <input type="radio" name="situation" value="School/Work" onChange={e=>props.situation(e.target.value)} />
            <label>Family</label>
            <input type="radio" name="situation" value="Family" onChange={e=>props.situation(e.target.value)} />
            <label>Relationship</label>
            <input type="radio" name="situation" value="Relationship" onChange={e=>props.situation(e.target.value)} />
            <label>Finances</label>
            <input type="radio" name="situation" value="Finances" onChange={e=>props.situation(e.target.value)} />
            <label>Body Image</label>
            <input type="radio" name="situation" value="Body Image" onChange={e=>props.situation(e.target.value)} />
            <label>Health</label>
            <input type="radio" name="situation" value="Health" onChange={e=>props.situation(e.target.value)} />
        </div>
    );
};



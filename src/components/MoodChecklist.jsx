


export default function MoodChecklist(props) {
    return (
        <div className="MoodChecklist">
        <div className="MoodChecklistSub">
            <label className="radioLabel">Sad</label>
            <input className="radioButton" type="radio" name="mood" value="sad" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Angry</label>
            <input className="radioButton" type="radio" name="mood"  value="angry" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Anxious</label>
            <input className="radioButton" type="radio" name="mood"  value="anxious" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Stressed</label>
            <input className="radioButton" type="radio" name="mood" value="stressed" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Jealous</label>
            <input className="radioButton" type="radio" name="mood" value="jealous" onChange={e=>props.mood(e.target.value)} />
        </div>

        <div className="MoodChecklistSub">
            <label className="radioLabel">Bored</label>
            <input className="radioButton" type="radio" name="mood"  value="bored" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Confused</label>
            <input className="radioButton" type="radio" name="mood"  value="confused" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Ashamed</label>
            <input className="radioButton" type="radio" name="mood"  value="ashamed" onChange={e=>props.mood(e.target.value)} />
            <label className="radioLabel">Happy</label>
            <input className="radioButton" type="radio" name="mood"  value="happy" onChange={e=>props.mood(e.target.value)} />
        </div>

        </div>
    );
};






export default function MoodChecklist(props) {
    return (
        <div className="MoodChecklist">
            <label>Sad</label>
            <input type="radio" name="mood" value="sad" onChange={e=>props.mood(e.target.value)} />
            <label>Angry</label>
            <input type="radio" name="mood"  value="angry" onChange={e=>props.mood(e.target.value)} />
            <label>Anxious</label>
            <input type="radio" name="mood"  value="anxious" onChange={e=>props.mood(e.target.value)} />
            <label>Stressed</label>
            <input type="radio" name="mood" value="stressed" onChange={e=>props.mood(e.target.value)} />
            <label>Jealous</label>
            <input type="radio" name="mood" value="jealous" onChange={e=>props.mood(e.target.value)} />
            <label>Bored</label>
            <input type="radio" name="mood"  value="bored" onChange={e=>props.mood(e.target.value)} />
            <label>Confused</label>
            <input type="radio" name="mood"  value="confused" onChange={e=>props.mood(e.target.value)} />
            <label>Ashamed</label>
            <input type="radio" name="mood"  value="ashamed" onChange={e=>props.mood(e.target.value)} />
            <label>Happy</label>
            <input type="radio" name="mood"  value="happy" onChange={e=>props.mood(e.target.value)} />
        </div>
    );
};



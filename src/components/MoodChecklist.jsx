
import "../Options"

export default function MoodChecklist(props) {
    return (
        <div className="MoodChecklist">
            <label>Sad</label>
            <input type="radio" name="mood" value={SAD} onChange={e=>props.mood(e.target.value)} />
            <label>Angry</label>
            <input type="radio" name="mood"  value={ANGRY} onChange={e=>props.mood(e.target.value)} />
            <label>Anxious</label>
            <input type="radio" name="mood"  value={ANXIOUS} onChange={e=>props.mood(e.target.value)} />
            <label>Stressed</label>
            <input type="radio" name="mood" value={STRESSED} onChange={e=>props.mood(e.target.value)} />
            <label>Jealous</label>
            <input type="radio" name="mood" value={JEALOUS} onChange={e=>props.mood(e.target.value)} />
            <label>Bored</label>
            <input type="radio" name="mood"  value={BORED} onChange={e=>props.mood(e.target.value)} />
            <label>Confused</label>
            <input type="radio" name="mood"  value={CONFUSED} onChange={e=>props.mood(e.target.value)} />
            <label>Ashamed</label>
            <input type="radio" name="mood"  value={ASHAMED} onChange={e=>props.mood(e.target.value)} />
            <label>Happy</label>
            <input type="radio" name="mood"  value={HAPPY} onChange={e=>props.mood(e.target.value)} />
        </div>
    );
};



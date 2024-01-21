
export default function MoodChecklist(props) {
    return (
        <div className="MoodChecklist">
            <label>Sad</label>
            <input type="radio" name="mood" label="Sad" value="Sad" onChange={e=>props.mood(e.target.value)} />
            <label>Angry</label>
            <input type="radio" name="mood" label="Angry" value="Angry" onChange={e=>props.mood(e.target.value)} />
            <label>Anxious</label>
            <input type="radio" name="mood" label="Anxious" value="Anxious" onChange={e=>props.mood(e.target.value)} />
            <label>Stressed</label>
            <input type="radio" name="mood" label="Stressed" value="Stressed" onChange={e=>props.mood(e.target.value)} />
            <label>Jealous</label>
            <input type="radio" name="mood" label="Jealous" value="Jealous" onChange={e=>props.mood(e.target.value)} />
            <label>Bored</label>
            <input type="radio" name="mood" label="Bored" value="Bored" onChange={e=>props.mood(e.target.value)} />
            <label>Confused</label>
            <input type="radio" name="mood" label="Confused" value="Confused" onChange={e=>props.mood(e.target.value)} />
            <label>Ashamed</label>
            <input type="radio" name="mood" label="Ashamed" value="Ashamed" onChange={e=>props.mood(e.target.value)} />
            <label>Happy</label>
            <input type="radio" name="mood" label="Happy" value="Happy" onChange={e=>props.mood(e.target.value)} />
        </div>
    );
};



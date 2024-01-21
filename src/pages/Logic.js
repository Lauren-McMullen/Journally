
const data = {
    "J0":"Beyond sadness and anger, are there other emotions present, such as disappointment, frustration, or fear?",
    "J1":"What personal habits do you wish you had? What could you do to implement these habits?",
    "J2":"How would you speak to a friend going through similar emotions?",
    "C0":"Imagine your emotions as elements of a rainy day such as clouds, raindrops, and thunder. Describe each element and how they contribute to the overall 'weather' of your mood.",
    "C1":"Personify your emotions and engage in a dialogue with them. Ask questions and allow each emotion to express itself through words.",
    "C2":"Allow yourself to write freely and expressively without judgment. Let your thoughts and emotions flow onto the paper without worrying about structure or coherence.",
    "L0":"Write a letter to your future self describing how you hope to overcome your current sadness. Include future goals, dreams, and positive affirmations.",
    "L1":"Write unsent letters to people or situations that contribute to your current feelings. Pour out your thoughts and feelings without the intention of sending these letters.",
    "L2":"Write a letter to a friend you haven't seen in a while. Share a vivid memory you have of the two of you together and express your thoughts and feelings about reconnecting."
}

export default function selectPrompts(promptType, emotion) {

    if (promptType === "Journal Prompt") {
        if (emotion == "sad") {
            return data.J0
        } else if (emotion === "happy") {
            return data.J1
        } else if (emotion === "angry") {
            return data.J0
        } else if (emotion === "anxious") {
            return data.J3
        } else if (emotion === "confused") {
            return data.J1
        } else if (emotion === "ashamed") {
            return data.J3
        } else if (emotion === "stressed") {
            return data.J1
        } else if (emotion === "jealous") {
            return data.J3
        } else if ( emotion === "bored") {
            return data.J1
        }
    }


    if (promptType === "Creative Prompt") {
        if (emotion === "sad") {
            return data.C0
        } else if (emotion === "happy") {
            return data.C1
        } else if ( emotion === "angry") {
            return data.C0
        } else if (emotion === "anxious") {
            return data.C2
        } else if (emotion === "confused") {
            return data.C0
        } else if (emotion === "ashamed") {
            return data.C2
        } else if (emotion === "stressed") {
            return data.C0
        } else if (emotion === "jealous") {
            return data.C2
        } else if ( emotion === "bored") {
            return data.C1
        }
    }


    if (promptType === "Letter Prompt") {
        if (emotion === "sad") {
            return data.L0
        } else if (emotion === "happy") {
            return data.L1
        } else if (emotion === "angry") {
            return data.L0
        } else if (emotion === "anxious") {
            return data.L2
        } else if (emotion === "confused") {
            return data.L0
        } else if (emotion === "ashamed") {
            return data.L2
        } else if (emotion === "stressed") {
            return data.L1
        } else if (emotion === "jealous") {
            return data.L2
        } else if (emotion === "bored") {
            return data.L1
        } 
    }  

    throw new Error("Could not find prompt for promptType =" + promptType + " and mood = " + emotion)
}

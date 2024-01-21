
import "./Options"

const data = {
    "J0":"Beyond sadness and anger, are there other emotions present, such as disappointment, frustration, or fear?",
    "J1":"What were your expectations for the situation or people involved. Were these expectations realistic, or were they based on assumptions?",
    "J2":"How would you speak to a friend going through similar emotions?",
    "C0":"Imagine your emotions as elements of a rainy day such as clouds, raindrops, and thunder. Describe each element and how they contribute to the overall 'weather' of your mood.",
    "C1":"Personify your emotions and engage in a dialogue with them. Ask questions and allow each emotion to express itself through words.",
    "C2":"Allow yourself to write freely and expressively without judgment. Let your thoughts and emotions flow onto the paper without worrying about structure or coherence.",
    "L0":"Write a letter to your future self describing how you hope to overcome your current sadness. Include future goals, dreams, and positive affirmations.",
    "L1":"Write unsent letters to people or situations that contribute to your current feelings. Pour out your thoughts and feelings without the intention of sending these letters.",
    "L2":"Write a letter to a friend you haven't seen in a while. Share a vivid memory you have of the two of you together and express your thoughts and feelings about reconnecting."
}

export default function selectPrompts(promptType, emotion) {

    if (promptType === JOURNAL_PROMPT) {
        if (emotion == SAD) {
            return data.J0
        } else if (emotion === HAPPY) {
            return data.J1
        } else if (emotion === ANGRY) {
            return data.J0
        } else if (emotion === ANXIOUS) {
            return data.J3
        } else if (emotion === CONFUSED) {
            return data.J1
        } else if (emotion === ASHAMED) {
            return data.J3
        } else if (emotion === STRESSED) {
            return data.J1
        } else if (emotion === JEALOUS) {
            return data.J3
        } else if ( emotion === BORED) {
        return data.J1
        }
    }


    if (promptType === CREATIVE_PROMPT) {
        if (emotion === SAD) {
            return data.C0
        } else if (emotion === HAPPY) {
            return data.C1
        } else if ( emotion === ANGRY) {
            return data.C0
        } else if (emotion === ANXIOUS) {
            return data.C2
        } else if (emotion === CONFUSED) {
            return data.C0
        } else if (emotion === ASHAMED) {
            return data.C2
        } else if (emotion === STRESSED) {
            return data.C0
        } else if (emotion === JEALOUS) {
            return data.C2
        } else if ( emotion === BORED) {
            return data.C1
        }
    }


    if (promptType === LETTER_PROMPT) {
        if (emotion === SAD) {
            return data.L0
        } else if (emotion === HAPPY) {
            return data.L1
        } else if (emotion === ANGRY) {
            return data.L0
        } else if (emotion === ANXIOUS) {
            return data.L2
        } else if (emotion === CONFUSED) {
            return data.L0
        } else if (emotion === ASHAMED) {
            return data.L2
        } else if (emotion === STRESSED) {
            return data.L1
        } else if (emotion === JEALOUS) {
            return data.L2
        } else if (emotion === BORED) {
            return data.L1
        } 
    }  

    throw new Error("Could not find prompt for promptType =" + promptType + " and mood = " + emotion)
}

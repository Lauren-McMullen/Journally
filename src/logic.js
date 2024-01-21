import './prompt.js';

export default function selectPrompts(promptType, emotion) {
    
    if (promptType === "journalPrompts" && emotion === "sad") {
        return journalPrompts[0]
    } else if (promptType === "journalPrompts" && emotion === "happy") {
        return journalPrompts[1]
    } else if (promptType === "journalPrompts" && emotion === "angry") {
        return journalPrompts[0]
    } else if (promptType === "journalPrompts" && emotion === "anxious") {
        return journalPrompts[2]
    } else if (promptType === "journalPrompts" && emotion === "confused") {
        return journalPrompts[1]
    } else if (promptType === "journalPrompts" && emotion === "ashamed") {
        return journalPrompts[2]
    } else if (promptType === "journalPrompts" && emotion === "stressed") {
        return journalPrompts[1]
    } else if (promptType === "journalPrompts" && emotion === "jealous") {
        return journalPrompts[2]
    } else if (promptType === "journalPrompts" && emotion === "bored") {
        return journalPrompts[1]
    }


    else if (promptType === "creativePrompts" && emotion === "sad") {
        return journalPrompts[0]
    } else if (promptType === "creativePrompts" && emotion === "happy") {
        return journalPrompts[1]
    } else if (promptType === "creativePrompts" && emotion === "angry") {
        return journalPrompts[0]
    } else if (promptType === "creativePrompts" && emotion === "anxious") {
        return journalPrompts[2]
    } else if (promptType === "creativePrompts" && emotion === "confused") {
        return journalPrompts[1]
    } else if (promptType === "creativePrompts" && emotion === "ashamed") {
        return journalPrompts[2]
    } else if (promptType === "creativePrompts" && emotion === "stressed") {
        return journalPrompts[1]
    } else if (promptType === "creativePrompts" && emotion === "jealous") {
        return journalPrompts[2]
    } else if (promptType === "creativePrompts" && emotion === "bored") {
        return journalPrompts[1]
    }


    else if (promptType === "letterPrompts" && emotion === "sad") {
        return journalPrompts[0]
    } else if (promptType === "letterPrompts" && emotion === "happy") {
        return journalPrompts[1]
    } else if (promptType === "letterPrompts" && emotion === "angry") {
        return journalPrompts[0]
    } else if (promptType === "letterPrompts" && emotion === "anxious") {
        return journalPrompts[2]
    } else if (promptType === "letterPrompts" && emotion === "confused") {
        return journalPrompts[1]
    } else if (promptType === "letterPrompts" && emotion === "ashamed") {
        return journalPrompts[2]
    } else if (promptType === "letterPrompts" && emotion === "stressed") {
        return journalPrompts[1]
    } else if (promptType === "letterPrompts" && emotion === "jealous") {
        return journalPrompts[2]
    } else if (promptType === "letterPrompts" && emotion === "bored") {
        return journalPrompts[1]
    }

}

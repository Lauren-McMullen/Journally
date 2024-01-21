import { FC } from 'react'
import { useState } from "react"


import logo from "../images/Quill_With_Ink.png"
import MoodChecklist from "../components/MoodChecklist.jsx"
import Header from "../components/Header.jsx"
import SituationChecklist from '../components/SituationChecklist.jsx'

import './style.css'

export const App = ({ name }) => {

  
  return (
    <div>
      <Header logo={logo} name={name}/>
      <h2>How are you feeling today? (Please select one)</h2>
      <MoodChecklist mood={setMood}/>
      <p>You picked: {mood}</p>
      <h2>What else is on your mind? (Please select one)</h2>
      <SituationChecklist situation={setSituation} />
      <p>You picked: {situation}</p>
      <button>Get Journally Prompts</button>
    </div>
  );
};

import { FC } from 'react'
import { useState } from "react"


import logo from "../images/Quill_With_Ink.png"
import MoodChecklist from "../components/MoodChecklist.jsx"
import Header from "../components/Header.jsx"
import SituationChecklist from '../components/SituationChecklist.jsx'
import selectPrompts from "../logic.js"

import './style.css'

export const App = ({ name }) => {

  const [mood, setMood]=useState();
  const [situation, setSituation]=useState();
  const [promptList, setPrompts]=useState();

  function findPrompts() {
    setPrompts(selectPrompts(promptList, mood));
  }

  return (
    <div>
      <Header logo={logo} name={name}/>
      <p>Journally gives you tailored journalling 
        prompts based on your current emotions and life challenges.</p>
      <h2>How are you feeling today?</h2>
      <MoodChecklist mood={setMood}/>
      <p>You picked: {mood}</p>
      <h2>What else is on your mind?</h2>
      <SituationChecklist situation={setSituation} />
      <p>You picked: {situation}</p>
      <button className="promptButton">Get Journally Prompts</button>
    </div>
  );
};

import { FC } from 'react'
import { useState } from "react"


import logo from "../images/Quill_With_Ink.png"
import MoodChecklist from "../components/MoodChecklist.jsx"
import Header from "../components/Header.jsx"

import './style.css'

export const App = ({ name }) => {
  const [prompts, setPrompts]=useState();

  function choosePrompts() {
    setPrompts(selectPrompts(prompts, mood))

  }
  return (
    <div>
      <Header logo={logo} name={name}/>

      <p>How are you feeling today?</p>
      <MoodChecklist  sad="Sad" mad="Mad" />
    </div>
  );
};

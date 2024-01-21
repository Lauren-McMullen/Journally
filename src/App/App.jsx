import { FC } from 'react'
import { useState } from "react"


import logo from "../images/Quill_With_Ink.png"
import MoodChecklist from "../components/MoodChecklist.jsx"

import './style.css'

export const App = ({ name }) => {
  return (
    <div>
      <Header logo={logo} name={name}/>

      <p>How are you feeling today?</p>
      <MoodChecklist  sad="Sad" mad="Mad" />
    </div>
  );
};

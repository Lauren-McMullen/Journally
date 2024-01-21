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
      <p>How are you feeling today? (Please select one)</p>
      <MoodChecklist  sad="Sad" angry="Angry" happy="Happy" anxious="anxious" stressed="Stressed" jealous="Jealous" bored="Bored" 
      confused="Confused" ashamed="Ashamed" />

      <p>What else is on your mind? (Please select one)</p>
      <SituationChecklist health="Health" schoolwork="School or Work" family="Family" finances="Finances" 
      relationships="Relationships" bodyimage="Body Image" />
      
    </div>
  );
};

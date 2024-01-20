import { FC } from 'react'
import { useState } from "react"



import MoodChecklist from "../components/MoodChecklist.jsx"

import './style.css'

export const App = ({ name }) => {
  return (
    <div>
      
      <h1>Welcome to {name}!</h1>
      <p>How are you feeling today?</p>
      <MoodChecklist  sad="Sad" mad="Mad" />
      

    </div>
  );
};

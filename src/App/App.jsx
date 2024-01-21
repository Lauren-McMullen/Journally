import { FC } from 'react'
import { useState } from "react"


import logo from "../images/JournallyLogo.png"
import MoodChecklist from "../components/MoodChecklist.jsx"
import Header from "../components/Header.jsx"
import SituationChecklist from '../components/SituationChecklist.jsx'
import selectPrompts from "../logic.js"
import JournalPage from '../components/JournalPage.jsx'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from '../pages/Welcome.jsx'
import Extra from '../pages/Extra.jsx'
import Emotions from '../pages/Emotions.jsx'
import PromptType from '../pages/PromptType.jsx'
import Write from '../pages/Write.jsx'

import './style.css'
import PromptList from '../components/PromptList.jsx'

export default function App() {

    const [mood, setMood]=useState();
    const [situation, setSituation]=useState();
    const [promptType, setpromptType]=useState();
    const [promptList, setPrompts]=useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome name="Journally"/>} />
          <Route path="/welcome" element={<Welcome name="Journally"/>} />
          <Route path="/extra" element={<Extra name="Journally"/>} />
          <Route path="/prompttype" element={<PromptType name="Journally"/>} />
          <Route path="/write" element={<Write name="Journally"/>} />
          <Route path="/emotions" element={<Emotions mood={setMood} name="Journally"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


// export const App = ({ name }) => {

//   const [mood, setMood]=useState();
//   const [situation, setSituation]=useState();
//   const [promptType, setpromptType]=useState();
//   const [promptList, setPrompts]=useState();

//   function findPrompts() {
//     setPrompts(selectPrompts(promptList, mood));
//   }

//   return (
//     <div>
//       <Header logo={logo} name={name}/>
//       <p>Journalling is a cathartic experience. Journally gives you tailored journalling 
//         prompts based on your current emotions and life challenges. When you are done getting your emotions out, set your thoughts free and watch them drift away!</p>
//       <h2>How are you feeling today?</h2>
//       <MoodChecklist mood={setMood}/>
//       <p>You picked: {mood}</p>
//       <h2>What else is on your mind?</h2>
//       <SituationChecklist situation={setSituation} />
//       <p>You picked: {situation}</p>
//       <h2>Pick the type of prompts you want:</h2>
//       <p>Journal prompts will ask you to write reflectively, like you might in a diary entry.
//         Creative prompts will provide you with a creative writing exercise that will help you engage with you emotions in a creative way.
//         Letter prompts will ask you to write a letter to yourself or someone else.
//       </p>
//       <PromptList promptType={setpromptType}/>
//       <p>You picked: {promptType}</p>
//       <button className="promptButton">Get Journally Prompts</button>
//       <h2>promptList[0]</h2>
//       <JournalPage />
//       <button className="promptButton">Send my writing to sea!</button>
//       <h2>promptList[1]</h2>
//       <JournalPage />
//       <button className="promptButton">Send my writing to sea!</button>

//       <h2>promptList[2]</h2>
//       <JournalPage />
//       <button className="promptButton">Send my writing to sea!</button>

      
//     </div>
//   );
// };

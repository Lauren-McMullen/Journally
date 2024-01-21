import { BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from '../pages/Welcome.js'
import Emotions from '../pages/Emotions.jsx'
import PromptType from '../pages/PromptType.jsx'
import Write from '../pages/Write.jsx'
import Sendoff from '../pages/Sendoff.jsx'
import "../pages/style.css"

export default function App() {
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome name="Journally"/>} />
          <Route path="/welcome" element={<Welcome name="Journally"/>} />
          <Route path="/prompttype" element={<PromptType name="Journally"/>} />
          <Route path="/write" element={<Write name="Journally"/>} />
          <Route path="/emotions" element={<Emotions name="Journally"/>} />
          <Route path="/write/sendoff" element={<Sendoff name="Journally"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

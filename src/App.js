import {Routes, Route} from "react-router-dom"
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import MyWork from "./MyWork/MyWork";
import Landing from "./LandingPage/LandingPage";


function App() {
  return(
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/skills" element={<Skills/>}/>
      <Route exact path="/Mywork" element={<MyWork/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App;

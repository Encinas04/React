import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
function App() {
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]
    const [showSkills, setShowSkills] = useState(false);
    return(
    <div>
        <Header />
        <Profile name="Hector" age={21} profession="Desarrollador web"/>
    <h3>Habilidades</h3>
            <Skill array={skills} show={showSkills}/>
        <button onClick={()=> setShowSkills(!showSkills)}>
            Mostrar Skills
        </button>
        <Footer />
    </div>
)
}
export default App

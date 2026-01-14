import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
function App() {
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]
    const [showSkills, setShowSkills] = useState(false);
    const [show, setShow] = useState(false);
    return(
    <div>
        <Header />
        <Profile name="Hector" age={21} profession="Desarrollador web"/>
        <Contact email={"hector@email.com"} phone={4745794556} show={show}/>
        <button onClick={()=> setShow(!show)}>
            Mostrar contacto
        </button>

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

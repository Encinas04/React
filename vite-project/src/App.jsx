import './App.css'
import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
function App() {
return(
    <div>
        <Header />
        <Profile name="Hector" age={21} profession="Desarrollador web"/>
    <h3>Habilidades</h3>
        <ul>
            <Skill text="JavaScript"/>
            <Skill text="React" />
            <Skill text="CSS" />
            <Skill text="Angular" />
        </ul>
        <Footer />
    </div>
)

}
export default App

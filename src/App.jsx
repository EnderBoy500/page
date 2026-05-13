import NavBar from "./components/NavBar.jsx";
import ModrinthModCard from "./components/ModrinthModCard.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./AboutMe.jsx";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>

    <NavBar isHome={true}/>
    <br/>
    <div className="mod-card-list">
      <ModrinthModCard modId="netherandend"/>
      <br/>
      <ModrinthModCard modId="enderlib"/>
    </div>
  </>);
}

export default App

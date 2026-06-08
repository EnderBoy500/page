import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe.jsx";
import Home from "./pages/Home.jsx";
import ModInfo from "./pages/ModInfo.jsx";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/mod/:modId" element={<ModInfo />}/>
      </Routes>
    </Router>
  </>);
}

export default App

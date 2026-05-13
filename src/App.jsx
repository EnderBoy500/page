import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./AboutMe.jsx";
import Home from "./Home.jsx";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  </>);
}

export default App

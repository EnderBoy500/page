import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "./pages/AboutMe.jsx";
import Home from "./pages/Home.jsx";
import ModInfo from "./pages/ModInfo.jsx";
import {useEffect, useState} from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreenSize("xs");
      else if (window.innerWidth < 768) setScreenSize("sm");
      else if (window.innerWidth < 1024) setScreenSize("md");
      else if (window.innerWidth < 1280) setScreenSize("lg");
      else if (window.innerWidth < 1536) setScreenSize("xl");
      else setScreenSize("xxl");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/mod/" element={<ModInfo />}/>
      </Routes>
    </Router>
  </>);
}

export default App

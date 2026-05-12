import NavBar from "./components/NavBar.jsx";
import ModrinthModCard from "./components/ModrinthModCard.jsx";

function App() {
  return (<>
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

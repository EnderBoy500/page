import NavBar from "./components/NavBar.jsx";
import ModrinthModCard from "./components/ModrinthModCard.jsx";

function Home() {
    return(<>
        <NavBar isHome={true}/>
        <br/>
        <div className="mod-card-list">
            <ModrinthModCard modId="netherandend" status="unknown"/>
            <br/>
            <ModrinthModCard modId="enderlib" isOpenSource={true} githubRepoName="Enderlib" hasWiki={true}/>
            <br/>
            <ModrinthModCard modId="bellum"/>
        </div>
    </>);
}

export default Home